import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useReduxDispatch } from "hooks/useReduxHooks";
import { FormikProvider, useFormik, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import TextField from "utils/TextField";
import { login } from "redux/thunks/auth.thunk";

///
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useReduxDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { email, password } = values;
      const res = await dispatch(login({ email, password }));
      if (res.type === "auth/login/fulfilled") {
        toast.success("Successfully logged in");
        resetForm();
        router.push("/");
      } else if (res.type === "auth/login/rejected") {
        toast.error(res.payload.message);
      }
    },
  });

  const { touched, values, getFieldProps, errors, handleSubmit } = formik;

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <div className="hero min-h-[75.5vh]">
          <div className="card flex-shrink-0 w-full max-w-xl py-10 shadow-2xl bg-base-100">
            <div className="card-head">
              <h1 className="text-2xl font-bold text-center">Login</h1>
            </div>
            <motion.div animate={animate} initial={{ opacity: 0, y: 60 }}>
              <div className="card-body">
                <div className="form-control">
                  <TextField
                    type={"text"}
                    placeholder="Email Address"
                    className="input input-bordered"
                    touched={touched.email}
                    errors={errors.email}
                    getFieldProps={getFieldProps}
                    label="Email (required)"
                    formikValue="email"
                  />
                </div>
                <div className="form-control">
                  <TextField
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered"
                    touched={touched.password}
                    errors={errors.password}
                    getFieldProps={getFieldProps}
                    label="Password (required)"
                    formikValue="password"
                  />

                  <div className="form-control">
                    <label className="label">
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                        <span className="label-text-xs">Show Password</span>
                      </div>
                      <Link href="/forgot-password" passHref>
                        <a className="label-text-sm link link-hover">
                          Forgot password?
                        </a>
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">login</button>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Don't have an account?</span>
                    <Link href={"/register"} passHref>
                      <a className="label-text-xs text-indigo-500 link link-hover">
                        Sign up
                      </a>
                    </Link>
                  </label>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is Invalid").required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
    ),
});

export default Login;

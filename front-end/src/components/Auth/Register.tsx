import React, { useState } from "react";
import { toast } from "react-toastify";
import { useReduxDispatch } from "hooks/useReduxHooks";
import { register } from "redux/thunks/auth.thunk";
import Link from "next/link";
import { FormikProvider, useFormik, Form } from "formik";
import * as Yup from "yup";
import TextField from "utils/TextField";
import { useRouter } from "next/router";

interface FormValues {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
  name: "",
  confirmPassword: "",
};

const Register = () => {
  const dispatch = useReduxDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { email, password, name } = values;
      const res: any = await dispatch(
        register({ email, password, name, role: "user" })
      );
      if (res.type === "auth/register/fulfilled") {
        toast.success("Successfully registered");
        resetForm();
        router.push("/");
      } else if (res.type === "auth/register/rejected") {
        toast.error(res.payload.message);
      }
      setLoading(false);
    },
  });

  const { touched, getFieldProps, values, errors, handleSubmit } = formik;

  return (
    <FormikProvider value={formik}>
      {/* lg:ml-[20%] */}
      <Form onSubmit={handleSubmit} autoComplete="off">
        <div className="max-w-screen flex items-center justify-center">
          <div className="card flex-shrink-0 lg:max-w-[60vw] w-full max-w-full py-10 my-10 shadow-2xl bg-base-100">
            <div className="card-head">
              <h1 className="text-2xl font-bold text-center">
                Create a new account
              </h1>
            </div>
            <div className="card-body ">
              <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                <div className="form-control">
                  <TextField
                    type={"text"}
                    placeholder="Name"
                    className="input input-bordered"
                    touched={touched.name}
                    errors={errors.name}
                    getFieldProps={getFieldProps}
                    label="Name (required)"
                    formikValue="name"
                  />
                </div>
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
                </div>
                <div className="form-control">
                  <TextField
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="input input-bordered"
                    touched={touched.confirmPassword}
                    errors={errors.confirmPassword}
                    getFieldProps={getFieldProps}
                    label="Confirm Password (required)"
                    formikValue="confirmPassword"
                  />
                </div>

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
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  className={`btn btn-primary ${
                    loading && "loading btn-disabled"
                  }`}
                >
                  register
                </button>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Already have an account?</span>
                  <Link href={"/login"} passHref>
                    <a className="label-text-xs text-indigo-500 link link-hover">
                      Login
                    </a>
                  </Link>
                </label>
              </div>
            </div>
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is Required"),

  name: Yup.string().required("Name is Required"),
});

export default Register;

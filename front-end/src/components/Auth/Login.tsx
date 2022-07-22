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
import {
  Button,
  Col,
  Container,
  Form as BootstrapForm,
  Row,
} from "react-bootstrap";

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
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { email, password } = values;
      try {
        setLoading(true);
        const res: any = await dispatch(login({ email, password }));
        if (res.type === "auth/login/fulfilled") {
          toast.success("Successfully logged in");
          resetForm();
          router.push("/");
        } else if (res.type === "auth/login/rejected") {
          if (res.payload.response.data.message === "Invalid password") {
            toast.error("Password is incorrect");
          } else {
            toast.error("Something went wrong");
          }
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
  });

  const { touched, values, getFieldProps, errors, handleSubmit } = formik;

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Container className="mt-5 pt-5">
          <Row className="justify-content-center align-items-center">
            <Col className="col-md-6 mb-4">
              <motion.div
                className="shadow-lg py-5 px-4 rounded"
                animate={animate}
                initial={{ opacity: 0, y: 60 }}
              >
                <div>
                  <h1 className="text-2xl fw-bold text-center">Login</h1>
                </div>

                <div>
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
                <div>
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

                  <div className="mb-3 d-flex justify-content-between">
                    <BootstrapForm.Check
                      type={"checkbox"}
                      id={`default-checkbox`}
                      label={`Show Password`}
                      onChange={() => setShowPassword(!showPassword)}
                    />

                    <Link href="/forgot-password" passHref>
                      <a className="label-text-sm link link-hover">
                        Forgot password?
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="mt-6">
                  <Button type="submit" disabled={loading} size="lg">
                    Login
                  </Button>
                </div>
                <div className="mt-2 d-flex justify-content-between">
                  <span className="label-text">Don't have an account?</span>
                  <Link href={"/register"} passHref>
                    <a className="label-text-xs  text-indigo-500 link link-hover">
                      Sign up
                    </a>
                  </Link>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
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

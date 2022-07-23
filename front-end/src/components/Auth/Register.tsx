import React, { useState } from "react";
import { toast } from "react-toastify";
import { useReduxDispatch } from "hooks/useReduxHooks";
import { register } from "redux/thunks/auth.thunk";
import Link from "next/link";
import { FormikProvider, useFormik, Form } from "formik";
import * as Yup from "yup";
import TextField from "utils/TextField";
import { useRouter } from "next/router";
import {
  Button,
  Col,
  Container,
  Form as BootstrapForm,
  Row,
} from "react-bootstrap";
import { motion } from "framer-motion";

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
        <Container className="mt-5 mx-auto">
          <Row className="justify-content-center align-items-center">
            <Col className="col-md-12 mb-4 px-5">
              <motion.div
                className="shadow-lg py-5 px-4 rounded"
                animate={animate}
                initial={{ opacity: 0, y: 60 }}
              >
                <div>
                  <h1 className="text-2xl fw-bold text-center">
                    Create a new account
                  </h1>
                </div>
                <div>
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
                </div>
                <div>
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

                <div className="mb-3 d-flex justify-content-between">
                  <BootstrapForm.Check
                    type={"checkbox"}
                    id={`default-checkbox`}
                    label={`Show Password`}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                </div>
                <div className="mt-2">
                  <Button type="submit" disabled={loading} size="lg">
                    Register
                  </Button>
                </div>
                <div className="mt-2 d-flex justify-content-between">
                  <span className="label-text">Already have an account?</span>
                  <Link href={"/login"} passHref>
                    <a>Sign in</a>
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is Required"),

  name: Yup.string().required("Name is Required"),
});

export default Register;

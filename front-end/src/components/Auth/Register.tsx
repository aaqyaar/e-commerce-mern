import React, { useState } from "react";
import Link from "next/link";
import { FormikProvider, useFormik, Form } from "formik";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { touched, values, getFieldProps, errors, handleSubmit } = formik;

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <div className="hero min-h-[75.5vh]">
          <div className="card flex-shrink-0 w-full max-w-xl py-10 shadow-2xl bg-base-100">
            <div className="card-head">
              <h1 className="text-2xl font-bold text-center">Register</h1>
            </div>
            <div className="card-body">
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered"
                  {...getFieldProps("email")}
                />
                <label className="label">
                  <span className="label-text text-red-500">
                    {touched.email && errors.email}
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered"
                  {...getFieldProps("password")}
                />
                <label className="label">
                  <span className="label-text text-red-500">
                    {touched.password && errors.password}
                  </span>
                </label>

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
                <button className="btn btn-primary">register</button>
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
  password: Yup.string().required("Password is Required"),
});

export default Register;

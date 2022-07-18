import React from "react";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="hero min-h-[75.5vh]">
      <div className="card flex-shrink-0 w-full max-w-xl py-10 shadow-2xl bg-base-100">
        <div className="card-head">
          <h1 className="text-2xl font-bold text-center">Login</h1>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link href="/forgot-password" passHref>
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">register</button>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Don't have an account?</span>
              <Link href={"/register"} passHref>
                <a className="label-text-alt text-indigo-500 link link-hover">
                  Sign up
                </a>
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router";

export const Login = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-2 bg-gray-600 p-5 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary w-full max-w-xs">Login</button>
        <Link to="/auth/register" className="btn btn-link text-white">
          Saya belum punya akun
        </Link>
      </div>
    </div>
  );
};

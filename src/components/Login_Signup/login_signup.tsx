"use client";
import { useState } from "react";

import "./login_signup.scss";
export default function Login_Signup() {
  const [openLogin, setOpenLogin] = useState(true);

  return (
    <div className="login_signup">
      <h1 className="title">Mind Zen</h1>
      <div className="log_sign_comp">
        <div className="buttons">
          <button
            className={
              openLogin
                ? "open_login bg-blue-300 animate-pulse text-black"
                : "open_login text-gray-500"
            }
            onClick={() => setOpenLogin(true)}
          >
            Log In
          </button>
          <button
            className={
              openLogin
                ? "open_login text-gray-500"
                : "open_login bg-green-300 animate-pulse text-black"
            }
            onClick={() => setOpenLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {openLogin ? (
          <div className="login">
            <form>
              <h1>Welcome Back!</h1>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Log In</button>
              <p>
                Do not have an account?{" "}
                <span onClick={() => setOpenLogin(false)}>Sign Up</span>
              </p>
            </form>
          </div>
        ) : (
          <div className="signup">
            <form>
              <h1>Create A New Account</h1>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
              <p>
                Already have an account?{" "}
                <span onClick={() => setOpenLogin(true)}>Log In</span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

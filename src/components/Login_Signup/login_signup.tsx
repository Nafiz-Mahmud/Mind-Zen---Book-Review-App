import "./login_signup.scss";
export default function Login_Signup() {
  return (
    <div className="login_signup">
      <h1>Mind Zen</h1>
      <div className="log_sign_comp">
        <div className="login">
          <form>
            <h1>Welcome Back!</h1>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="signup">
          <form>
            <h1>Create A New Account</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

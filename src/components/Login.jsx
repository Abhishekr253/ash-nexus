import "./Login.css";
import { ArrowRight } from "lucide-react";

export default function Login() {
  return (
    <div className="login-page">
      {/* Left Side */}
      <div className="left">
        <div className="logo">
          <img
            src="/al-logo-black.png"
            alt="ASH Nexus Logo"
            className="logo-img"
          />
        </div>

        <p>ASH NEXUS</p>
      </div>

      {/* Right Side */}
      <div className="right">
        <div className="shape">
          <div className="field username">
            <label>USERNAME</label>
            <input />
          </div>

          <div className="field password">
            <label>PASSWORD</label>
            <input type="password" />
          </div>
        </div>

        <button className="login-btn">
          <div className="circle">
            <ArrowRight size={24} strokeWidth={2.5} />
          </div>

          <span>SIGN IN</span>
        </button>

        <a href="/">Forgot password?</a>
      </div>
    </div>
  );
}

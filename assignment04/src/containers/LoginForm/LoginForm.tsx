import { useState } from "react";
import sindelBackground from "../../assets/sindel-background.png";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, ROUTES } from "../../Constants/APP_CONSTANTS";
import "./LoginForm.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "BruceWayne@gmail.com" && password === "password") {
      localStorage.setItem(LOCAL_STORAGE_KEYS.IS_LOGGED_IN, "true");
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_EMAIL, email);
      navigate(ROUTES.HOME);
    } else {
      setError("Invalid credentials");
    }
  };
  return (
    <div className="login-page">
      <div className="background-image">
        <img src={sindelBackground} alt="background" />
      </div>
      <div className="login-form">
        <h2 className="login-heading">Login</h2>
        <p className="login-description">
          Logging into CineFLEX will give you access to full videos and movies.
          You can sit back, relax and watch at your home.
        </p>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <Button name="LOGIN" className="watch-now" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

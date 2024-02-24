import React, { useState } from "react";
import styles from "./login.module.css";
import eye from "../../assets/eye.svg";
import { LoginUser } from '../../Services/authService';
import {useNavigate} from 'react-router-dom';

const Login = ({ setOpenSignUpForm, setOpenLoginForm,setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleTogglePasswordVisibility = () => {
    const passwordInput = document.getElementById("passwordInput");
    passwordInput.type === "password"
      ? (passwordInput.type = "text")
      : (passwordInput.type = "password");
  };

  const resetForm = () => {
    setLoginData({
      email: '',
      password: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await LoginUser(loginData)
    if (response) {
      localStorage.setItem('token', response)
      resetForm();
      setIsLoggedIn(true)
      navigate('/dashboard')
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <p className={styles.formTitle}>Login</p>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className={`${styles.inputField} ${styles.emailInput}`}
          value={loginData.email}
          onChange={handleLoginInputChange}
        />
        <div className={styles.passwordInputBox}>
          <input
            id="passwordInput"
            type="password"
            placeholder="Password"
            name="password"
            className={`${styles.inputField} ${styles.passInput}`}
            value={loginData.password}
            onChange={handleLoginInputChange}
          />
          <img
            src={eye}
            alt="Toggle Password Visibility"
            onMouseDown={handleTogglePasswordVisibility}
            onMouseUp={handleTogglePasswordVisibility}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
      <div className={styles.loginFormFooter}>
        <span>Have no account yet?</span>
        <button
          className={styles.registerButton}
          onClick={() => {
            setOpenLoginForm(false);
            setOpenSignUpForm(true);
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;

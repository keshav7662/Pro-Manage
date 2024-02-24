import React, { useState } from "react";
import styles from "./signUp.module.css";
import eye from '../../assets/eye.svg';
import { Register } from '../../Services/authService';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setOpenSignUpForm, setOpenLoginForm, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleSignUpInputChange = (e) => {
    const { name, value } = e.target
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleTogglePasswordVisibility = (id) => {
    const passwordInput = document.getElementById(id);
    passwordInput.type === "password"
      ? (passwordInput.type = "text")
      : (passwordInput.type = "password");
  };

  const resetForm = () => {
    setSignUpData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Register(signUpData)
    if (response) {
      localStorage.setItem('token', response)
      resetForm()
      setIsLoggedIn(true)
      navigate('/dashboard')
      navigate('/dashboard')
    }
  }

  return (
    <div className={styles.signUpFormContainer}>
      <p className={styles.formTitle}>Login</p>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name='name'
          className={`${styles.inputField} ${styles.nameInput}`}
          value={signUpData.name}
          onChange={handleSignUpInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name='email'
          className={`${styles.inputField} ${styles.emailInput}`}
          value={signUpData.email}
          onChange={handleSignUpInputChange}
        />
        <div className={styles.passwordInputBox}>
          <input
            id="passwordInput"
            type="password"
            placeholder="Password"
            name="password"
            className={`${styles.inputField} ${styles.passInput}`}
            value={signUpData.password}
            onChange={handleSignUpInputChange}
          />
          <img
            src={eye}
            alt="Toggle Password Visibility"
            onMouseDown={() => handleTogglePasswordVisibility("passwordInput")}
            onMouseUp={() => handleTogglePasswordVisibility("passwordInput")}
          />
        </div>
        <div className={styles.passwordInputBox}>
          <input
            id="confirmPasswordInput"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className={`${styles.inputField} ${styles.passInput}`}
            value={signUpData.confirmPassword}
            onChange={handleSignUpInputChange}
          />
          <img
            src={eye}
            alt="Toggle Password Visibility"
            onMouseDown={() => handleTogglePasswordVisibility("confirmPasswordInput")}
            onMouseUp={() => handleTogglePasswordVisibility("confirmPasswordInput")}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className={styles.signUpFormFooter}>
        <span>Have no account yet?</span>
        <button
          className={styles.loginButton}
          onClick={() => {
            setOpenLoginForm(true);
            setOpenSignUpForm(false);
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default SignUp;

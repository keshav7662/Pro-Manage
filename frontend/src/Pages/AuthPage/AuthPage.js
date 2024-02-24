import React, { useState } from 'react'
import styles from './authPage.module.css'
import Login from '../../Components/LoginForm/Login'
import SignUp from '../../Components/SignUpForm/SignUp'
import Banner from '../../assets/banner.png'

const AuthPage = ({ setIsLoggedIn }) => {
  const [openSignUpForm, setOpenSignUpForm] = useState(false)
  const [openLoginForm, setOpenLoginForm] = useState(true)

  return (
    <div className={styles.authPageContainer}>
      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          <img src={Banner} alt="" />
        </div>
        <div className={styles.caption}>
          <p>Welcome abroad my friend</p>
          <span>just couple of clicks and we start!</span>
        </div>
      </div>
      <div className={styles.formContainer}>
        {openLoginForm ? (
          <Login setOpenSignUpForm={setOpenSignUpForm} setOpenLoginForm={setOpenLoginForm} setIsLoggedIn={setIsLoggedIn} />
        ) : openSignUpForm ? (
          <SignUp setOpenSignUpForm={setOpenSignUpForm} setOpenLoginForm={setOpenLoginForm} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default AuthPage

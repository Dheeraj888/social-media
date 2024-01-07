import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">DeeSocial</h3>
                <span className="logindesc">
                    Connect with freinds and the world around on DeeSocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className='loginInput' type="email" />
                    <input placeholder='Password' className='loginInput' type="password" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forget Password</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
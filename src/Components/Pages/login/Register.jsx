import React from 'react'
import "./Register.css"

const Register = () => {
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

                <input placeholder='UserName' className='loginInput' type="text" />
                    <input placeholder='Email' className='loginInput' type="email" />
                    <input placeholder='Password' className='loginInput' type="password" />
                    <input placeholder='Re-Enter-Password' className='loginInput' type="password" />
                    <button className="loginButton">Sign Up</button>
                    <span className="loginForgot">Forget Password</span>
                    <button className="loginRegisterButton">Login to Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
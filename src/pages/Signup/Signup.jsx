import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <>
            <div className="panel">
            <p className="middle-text">Or</p>
                <div className="gray-panel">
                    <h1 className="logo">Scatch</h1>
                    <div className="form-container">
                        <p className="form-text">Welcome to <span>Scatch</span><br />Create Account</p>
                        <form id="form" action="">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <button className="signup-btn"> Signup</button>
                        </form>
                    </div>
                </div>
                <div className="white-panel">
                    <h2 className="login-heading-text">Login Account </h2>
                   <form id="login-form" action="">
                   <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <button className="login-btn">Login</button>
                   </form>
                </div>
            </div>

        </>
    )
}

export default Signup
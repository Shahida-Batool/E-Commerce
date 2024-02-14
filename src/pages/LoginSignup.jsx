import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' /><br />
          <input type="email" placeholder='Email Address'/><br />
          <input type="password" placeholder='Password' /><br />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login"> Already have an aacount? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="Checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup

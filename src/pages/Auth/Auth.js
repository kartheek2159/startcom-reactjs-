import React from 'react'
import './Auth.css'
// import logo from '../../images/startcom-logo.png'
const Auth = () => {
  return (
    <div className='Auth'>
        <div className='a-left'>
            <div className='Webname'>
                <h1>STARTCOM</h1>
                <h2>##Nuture Your Ideas</h2>
            </div>
        </div>
        {/* <SignUp/> */}
        <Login/>
    </div>
  )
}
function SignUp(){
    return(
        <div className='a-right'>
            <form className="infoForm authForm">
                <h2>SignUp</h2>
                <div>
                <input type="text" placeholder='First Name' className='infoInput' name="firstname"></input>
                <input type="text" placeholder='Last Name' className='infoInput' name="lastname"></input>
                </div>
                <div>
                <input type="text" placeholder='User Name' className='infoInput' name="username"></input>
                </div>
                <div>
                <input type="email" placeholder='Email' className='infoInput' name="email"></input>
                </div>
                <div>
                <input type="text" placeholder='Password' className='infoInput' name="password"></input>
                <input type="text" placeholder='Confirm Password' className='infoInput' name="confirmpassword"></input>
                </div>
                <div>
                    <span>Already Have An Account Login!</span>
                </div>
                <button className='button-signup' type='submit'>SignUp</button>
               
            </form>
        </div>
    )
}
function Login(){
    return(
        <div className='a-right'>
            <form className="infoForm authForm">
                <h2>Login</h2>
                <div>
                <input type="text" placeholder='User Name' className='infoInput' name="username"></input>
                </div>
                <div>
                <input type="text" placeholder='Password' className='infoInput' name="password"></input>
                </div>
                <div>
                    <span>Don't Have An Account SignUp</span>
                </div>
                <button className='button-signup' type='submit'>SignUp</button>
               
            </form>
        </div>
    )
}

export default Auth
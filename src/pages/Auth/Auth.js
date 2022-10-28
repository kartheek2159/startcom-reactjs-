import React, { useState } from 'react'

import {Routes,Route,useNavigate} from 'react-router-dom'
import {Home} from '../../pages/home/Home';
import './Auth.css'
const Auth = () => {
    
   const navigate=useNavigate();
    const [isSignup,setIsSignup]=useState(true);
    const [data,setData]=useState({firstname:"",lastname:"",username:"",email:"",password:"",confirmpassword:""})
    const [confirmPass,setConfirmPass]=useState(true);
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isSignup){
            if(data.password!==data.confirmpassword)
            {
                setConfirmPass(false)
            }

        }
    }
    const resForm=()=>{
        setConfirmPass(true);
        setData({firstname:"",lastname:"",username:"",email:"",password:"",confirmpassword:""})
    }
    
  return (
    <div className='Auth'>
        <div className='a-left'>
            <div className='Webname'>
                <h1>STARTCOM</h1>
                <h2>##Nuture Your Ideas</h2>
            </div>
        </div>
        <div className='a-right'>
            <form className="infoForm authForm" onSubmit={handleSubmit}>
                <h2>{isSignup?"SignUp":"Login"}</h2>
               
                {isSignup&&
                <div><input type="text" placeholder='First Name' className='infoInput' name="firstname" onChange={handleChange} value={data.firstname}></input>
                <input type="text" placeholder='Last Name' className='infoInput' name="lastname" onChange={handleChange} value={data.lastname}></input>
                </div>
                }
                <div>
                <input type="text" placeholder='User Name' className='infoInput' name="username" onChange={handleChange} value={data.username}></input>
                </div>
                {isSignup&&
                <div>
                <input type="email" placeholder='Email' className='infoInput' name="email" onChange={handleChange} value={data.email}></input>
                </div>}
                <div>
                <input type="password" placeholder='Password' className='infoInput' name="password" onChange={handleChange} value={data.password}></input>
                {isSignup&&<input type="password" placeholder='Confirm Password' className='infoInput' name="confirmpassword" onChange={handleChange} value={data.confirmpassword}></input>}
                </div>
                <span style={{display:confirmPass?"none":"block",color:"red",fontSize:"12px",alignSelf:"flex-end",marginRight:"5px"}}>
                    *Password MisMatch
                </span>
                <div>
                    <span className='spanclass' onClick={()=>{setIsSignup((e)=>!e);resForm()}}>
                    {isSignup?"Already Have An Account Login!":"Don't Have An Account SignUp!"}
                        
                        </span>
                </div>
                <button className='button-signup' type='submit' onClick={()=>{navigate('/home')}}>{isSignup?"Signup":"Log In"}</button>
            </form>
           
        </div>
        <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
    
  )
  
}


export default Auth
import React from 'react'
import Logo from '../images/engage.png'
import {Link, useNavigate} from 'react-router-dom'
import '../index.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import registerUrl from '../utils/api'
import Axios from 'axios'

function Register() {
  const navigate = useNavigate()
 const [values, setValues] = useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
 })

 const handleChange = (event) => {
  setValues({...values, [event.target.name]:  event.target.value})
 }

 const handleSubmit = async (event) => {
  event.preventDefault();
  if(handleValidation()) {
   const  {username,email,password } = values
   const { data } = await Axios.post(registerUrl, {
    username,
    email,
    password
   });
   if(data.status === false) {
    toast.error(data.msg, toastOptions)
   }
   if(data.status === true) {
    localStorage.setItem("chat-app-user", JSON.stringify(data.user))
    navigate('/')
   }
  }
 }

 const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHold: true,
  draggable: true,
  theme: "dark"
 }

 const handleValidation = () => {
  const {username,email,password,confirmPassword} = values;

  if(password !== confirmPassword) {
    toast.error("password and confirm password must be the same", toastOptions)

    return false;
  }

  else if(username.length < 5) {
    toast.error("Username must be at least 5 characters", toastOptions)
    return false;
  }
    else if(password.length < 6) {
      toast.error("Password must be at least 6 characters", toastOptions)
      return false;
    }

    else if(email === "") {
      toast.error("Email is requires", toastOptions)
      return false;
    }
     return true
 } 

  return (
    <>
      <div className='container' >
        <form onSubmit={(event) => handleSubmit(event)} >
          <div className='brand'>
          <img src={Logo} alt=''/>
            <h1 className='logo-text'>
             Engage
            </h1>
            </div>

          <input type="text"
          name="username"
          className='username'
          placeholder='Username'
          onChange={(e) => handleChange (e)}
          />

          <input type="text"
          name="email"
          className='email'
          placeholder='Email'
          onChange={(e) => handleChange (e)}
          />

          <input type="password"
          name="password"
          className='password'
          placeholder='password'
          onChange={(e) => handleChange (e)}
          />

          <input type="password"
          name="confirmPassword"
          className='confirmPassword'
          placeholder='Confirm Password'
          onChange={(e) => handleChange (e)}
          />

          <button type="submit">Register</button>

          <span className='reg-text'>Already Have an account? 
          <Link to='/login' style={{textDecoration: 'none'}} > Login </Link>
          </span>
        </form>
        <ToastContainer/>
      </div>
    </>
  )
}


export default Register
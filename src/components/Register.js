import React from 'react'
//import Login from './login'
import './index.css'

function Register() {
  return (
    <div  className='position-absolute top-50 start-50 translate-middle   p-4 rounded '>
      <div class="mb-3">
  <input type="text"   placeholder="username"/>
</div>
     <div class="mb-3">
  <input type="text"  placeholder="Email"/>
</div>
<div class="mb-3">
  <input type="text"  placeholder=" password"/>
</div>
<div class="mb-3">
  <input type="text"  placeholder="Confirm password"/>
</div>
<h1 className='Reg-text'>Have an account? <a href='login' className='Reg-text'>Login</a> </h1>
<div class="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-light fs-6" type="button"><h1 className='btn-text'>Submit</h1></button>
</div>
 </div>
  )
}

export default Register
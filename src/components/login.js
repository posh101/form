import React from 'react'

function login() {
  return (
    <div  className='position-absolute top-50 start-50 translate-middle p-4 rounded text="'>
     <div class="mb-3">
  <input type="text"  placeholder="Email"/>
</div>
<div class="mb-3">
  <input type="text"  placeholder=" password"/>
</div>
<h1 className='Reg-text'>Don't have an account? <a href='Register' className='Reg-text'>Register</a> </h1>
<div class="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-light fs-6" type="button"><h1 className='btn-text'>Login</h1></button>
</div>
 </div>
  )
}

export default login
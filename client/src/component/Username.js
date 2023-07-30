import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom";
import styles from "../styles/Username.module.css"
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik";
import {uservalidate} from "../helpers/validate";
import avatar from "../assets/avatar.png"
function Username() {
  const navigate = useNavigate();
  const[username,setUsername]=useState();
  const formik=useFormik({
    initialValues:{
      username:"abc",
      password:"abc@123"
    },
    validate:uservalidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values=>{
      setUsername(values.username);
      console.log(username);
    }

  })
  return (
 
      <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
       <div className="flex justify-center items-center h-screen">
       <div>
        <div className="title flex flex-col items-center">
          <h4 className='text-5xl font-bold'>Welcome back!</h4>
          <span className='py-4 text-xl w-2/3 text-center text-grey-5'>
            Log in to continue
          </span>
        </div>
        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <img src={avatar} className={styles.profile_img} alt="avatar"/>
          </div>
          <div className='textbox'>
            <input  {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username'/>
            <input className={styles.textbox} type="password"  {...formik.getFieldProps('password')}placeholder='password'/>
            <div className=' py-2 text-end '>
              <Link className='text-red-500 mx-20' to="/recovery">Forgot password?</Link>
              </div>
            <button className={styles.btn} type="submit">Login</button>
          </div>
         <div className='text-center py-4'>
           <span className='text-gray-500'>
            New to serve? <Link className="text-red-500" to="/register">Register</Link>
           </span>
         </div>
        </form>
       </div>
       </div>
    </div>
 
  )
}

export default Username



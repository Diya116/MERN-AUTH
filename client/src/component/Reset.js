import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom";
import styles from "../styles/Username.module.css"
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik";
import {uservalidate} from "../helpers/validate";
import avatar from "../assets/avatar.png"
function Reset() {
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
          <h4 className='text-5xl font-bold'>Reset password</h4>
         
        </div>
        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='textbox'>
          
            <input className={styles.textbox} type="password"  {...formik.getFieldProps('password')}placeholder='password'/>
            <input className={styles.textbox} type="password"  {...formik.getFieldProps('confirm password')}placeholder='confirm password'/>
            
            <button className={styles.btn} type="submit"> <Link to="/">save</Link></button>
          </div>
        
        
        </form>
       </div>
       </div>
    </div>
 
  )
}

export default Reset

import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom";
import styles from "../styles/Username.module.css"
import {Toaster} from "react-hot-toast"
import {useFormik} from "formik";
import {uservalidate} from "../helpers/validate";
import avatar from "../assets/avatar.png"
function Profile() {
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
          <h4 className='text-5xl font-bold'>Update your Profile</h4>
          <span className='py-4 text-xl w-2/3 text-center text-grey-5'>
            sign up to join amazing creative community 
          </span>
        </div>
        <form className='py-1' onSubmit={formik.handleSubmit}>
          <div className='profile flex justify-center py-4'>
            <img src={avatar} className={styles.profile_img} alt="avatar"/>
          </div>
          <div className='textbox'>
          <input className={styles.textbox} type="text"  {...formik.getFieldProps('username')}placeholder='firstname'/>
          <input className={styles.textbox} type="text"  {...formik.getFieldProps('username')}placeholder='lastname'/>
            <input  {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='email'/>
            <input className={styles.textbox} type="text"  {...formik.getFieldProps('username')}placeholder='username'/>
            <input className={styles.textbox} type="text"  {...formik.getFieldProps('confirm password')}placeholder='mobile number'/>
            <input className={styles.textbox} type="text"  {...formik.getFieldProps('confirm password')}placeholder='address'/>
            <input className={styles.textbox} type="password"  {...formik.getFieldProps('password')}placeholder='password'/>
           
            
            <button className={styles.btn} type="submit">Update</button>
          </div>
        
      
        </form>
       </div>
       </div>
    </div>
 
  )
}

export default Profile

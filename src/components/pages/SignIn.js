//import React from 'react'

//export default function SignIn() {
   // return <h1 className="Sign-in">This is Login Page</h1>
    
//}
import React, { useState } from 'react';
import './SignUp.css';
import FormSignin from './FormSignin';
import FormSuccess from './FormSucess';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src='login.jpg' alt='kids edu'/>
          
        </div>
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;



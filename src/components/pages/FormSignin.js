import React from 'react';
import validate from './validateinfo';
import useForm from './useForm';
import './SignUp.css';
import GoogleButton from 'react-google-button';
import AppleLogin from 'react-apple-login';
import { Link } from 'react-router-dom';

const FormSignin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Please Use the earlier credentials to Login, Thank you for using our service.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <GoogleButton  className='form-input-btn'/>
        <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" className='apple-btn'/>

        <Link to ='/'>
            <button className='back-btn' type='submit'>
                Back
            </button>
        </Link>

        
      </form>
    </div>
  );
};

export default FormSignin;
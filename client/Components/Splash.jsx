import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import GoogleLogin from 'react-google-login';
import InspirationQuote from './InspirationQuote.jsx';

const Splash = () => {
  const [openSignIn, setSignIn] = React.useState(false);
  const [openSignUp, setSignUp] = React.useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const username = document.getElementsByName('uname');
    const password = document.getElementsByName('pass');
    const loginInfo = {
      username: username,
      password: password,
    };
    await fetch('/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login Successful', data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const username = document.getElementsByName('uname');
    const password = document.getElementsByName('pass');
    const signupInfo = {
      username: username,
      password: password,
    };
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify(signupInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Account Created', data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <div className='logoContainer'>
        <header>
          <h1>3 Good Things: A Practice in Gratitude</h1>
        </header>
      </div>
      <div className='landingElements'>
        <div className='signBtn'>
          <Button variant='contained' onClick={() => setSignIn(!openSignIn)}>
            Sign In
          </Button>
        </div>
        <div className='signBtn'>
          <Button variant='contained' onClick={() => setSignUp(!openSignUp)}>
            Sign Up
          </Button>
        </div>
      </div>

      {openSignIn && (
        <div id='signIn' className='sign'>
          <form className='modal-content' method='POST' action='/signin'>
            <button
              onClick={() => setSignIn(!openSignIn)}
              className='close'
              title='Close Modal'
            >
              X
            </button>
            <label>
              <b>Username</b>
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              name='uname'
              required
            ></input>
            <label>
              <b>Password</b>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='pass'
              required
            ></input>
            <button type='submit' onClick={handleSignIn}>
              Sign In
            </button>
            <GoogleLogin
              clientId='1009788539176-akfnnceoupacq46h007proid6i1skdbg.apps.googleusercontent.com'
              buttonText='Sign In with Google'
              onSuccess={responseGoogle}
              ononFailure={responseGoogle}
              cookiePolicy='single_host_origin'
            ></GoogleLogin>
          </form>
        </div>
      )}
      {openSignUp && (
        <div id='signUp' className='sign'>
          <form className='modal-content' method='POST' action='/signup'>
            <button
              onClick={() => setSignIn(!openSignIn)}
              className='close'
              title='Close Modal'
            >
              X
            </button>
            <label>
              <b>Username</b>
            </label>
            <input
              type='text'
              placeholder='Enter a Username'
              name='uname'
              required
            ></input>
            <label>
              <b>Password</b>
            </label>
            <input
              type='password'
              placeholder='Enter a Password'
              name='pass'
              required
            ></input>
            <button type='submit' onClick={handleSignUp}>
              Sign Up
            </button>
            <GoogleLogin
              clientId='1009788539176-akfnnceoupacq46h007proid6i1skdbg.apps.googleusercontent.com'
              buttonText='Sign up with Google'
              onSuccess={responseGoogle}
              ononFailure={responseGoogle}
              cookiePolicy='single_host_origin'
            ></GoogleLogin>
          </form>
        </div>
      )}
      <div className='quoteContainer'>
        <InspirationQuote />
      </div>
    </div>
  );
};

// const signIn = document.createElement('div');
//   signIn.id = 'signIn';
//   const signInForm = document.createElement('form');
//   signInForm.className = 'modal-content animate';
//   signInForm.method = 'POST';
//   const usernameLabel = document.createElement('label');
//   const passwordLabel = document.createElement('label');
//   const usernameInput = document.createElement('input');
//   const passwordInput = document.createElement('input');
//   usernameInput.type = 'text';
//   usernameInput.placeholder = 'Enter Username';
//   usernameInput.name = 'uname';
//   usernameInput.required;
//   usernameInput.innerText = 'Username';
//   passwordInput.type = 'password';
//   passwordInput.placeholder = 'Enter Password';
//   passwordInput.name = 'pass';
//   passwordInput.required;
//   passwordInput.innerText = 'Password';
//   const signInSubmit = document.createElement('button');
//   signInSubmit.type = 'submit';
//   signInSubmit.innerText = 'Sign In';
//   signInForm.appendChild(signInSubmit);
//   signIn.appendChild(signInForm);
//   signIn.append(document.getElementsByClassName('landingElements'));

export default Splash;

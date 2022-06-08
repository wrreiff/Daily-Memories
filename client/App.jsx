import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Splash from './Components/Splash.jsx';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './styles.scss';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  return (
    <div id='App'>
      <AppBar>
        <Toolbar>
          <div className='navbar'>3 Good Things</div>
        </Toolbar>
      </AppBar>
      <div className='bodyTop'>
        {isLoggedIn ? <div>Williams comp</div> : <Splash />}
      </div>
    </div>
  );
}

export default App;

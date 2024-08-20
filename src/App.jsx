import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import AppCont from './components/appCont/AppCont';
import Shop from './components/shop/Shop';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <>
      <AppCont>
        <NavBar></NavBar>
        <Shop></Shop>
      </AppCont>
    </>
  );
}

export default App;

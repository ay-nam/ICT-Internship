import React from 'react';
import './App.css';
import View from './components/View';
import Records from './components/Records';
import Add from './components/Add';
import roseImage from './assets/rose.jpg';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <img src={roseImage} alt="Rose-image" height={100} width={100} />
      <h1>Welcome to React Session</h1>
      <View/>
      <Routes>
        <Route path='/' element={<Records/>}></Route>
        <Route path='/add' element={<Add person={{
          fname:"Swathi",department:"English",semester:"S4"
        }}/>}></Route>
      </Routes>
    </>
  )
}

export default App

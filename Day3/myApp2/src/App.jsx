import * as React from 'react';
import './App.css'
import NavBar from './components/NavBar';
import View from './components/View';
import Add from './components/Add';
import { Routes,Route } from 'react-router-dom';

function App() {


  return (
    <>
      <h1>Welcome to Movies Page</h1>
      <NavBar/>
      <Routes>
        <Route path='/' element={<View/>} ></Route>
        <Route path='/add' element={<Add/>} ></Route>
      </Routes>
    </>
  )
}

export default App

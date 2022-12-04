import React from 'react';
import './App.css';
import Header from './components/Header'; 
import App from './App'; 
import {  Route, Routes } from 'react-router-dom';
import Matches from './pages/Matches';
import Players from './pages/Players';
import AddMatchData from './pages/AddMatchData';
 import AddPlayer  from './pages/AddPlayer';
 


function RegisterRoutePaths() { 
  return (
    
 
       <Routes>
          <Route path="/" element={<App />} />
        <Route path="/home" element={<Players />} />
        <Route path = "/add-match-data" element ={<AddMatchData />}/>
          <Route path = "/add-player" element ={<AddPlayer />}/>     
         
      </Routes> 
       
  );
}

export default RegisterRoutePaths;

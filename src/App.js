import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'; 
import Login from './Login'; 
import {  Route, Routes } from 'react-router-dom';
import Matches from './pages/Matches';
import Players from './pages/Players';
import AddMatchData from './pages/AddMatchData';
 import AddPlayer  from './pages/AddPlayer';



function App() { 
  return (
    
      <div>
 
        <header>
        <Header /> 
         </header>
        <section>

        <Login></Login>
        </section>
      </div>
       
  );
}

export default App;

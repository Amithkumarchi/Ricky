import React,{useState} from 'react';
import './App.css';
 import Left from './components/racket_left.png';
 import Right from './components/racket_right.png';
 
 import {
  Routes,
  Route,useNavigate
} from "react-router-dom";
 import Matches from './pages/Matches';
 import LoggedInPlayer from './pages/Players';
 import AddMatchData from './pages/AddMatchData';
 import AddPlayer  from './pages/AddPlayer';
 
  


function Login() { 

  const navigate=useNavigate();
 

  return (
      <div  style={{backgroundColor: "#F5F5F5",height: "88%",textAlign:"center",backgroundImage:""}}>
      
  
 <img src={Left} style={{position: "relative",
    height: "50%",
    left: "-54vh",
    top: "14vh"}}/>
 <img src={Right} style={{position: "relative",
    height: "50%",
    left: "54vh",
    top: "14vh"}}/>
      <div  style={{backgroundColor:"#E1E7EC",
                    position:"relative",
                    top:"-35%",
                    left:"36%",
                    height:"60%",
                    textAlign:"center",
                     width:"30%",
                    border:"1px solid #E1E7EC"}}>
  <div className = "card-body">
                        <form>
 
                        <button className = "btn btn-primary">
                                Login
                            </button>
                            <button className = "btn btn-info">
                                Sign-up
                            </button>
                            <div className = "form-group mb-2" style={{marginTop:"5%"}}>
                                <label className = "form-label">Username</label>
                                <input
                                    type = "text"
                                    placeholder = "Email Address"
                                    name = "playerID"
                                    className = "form-control"
                                       
                                >
                                </input>
                            </div>
                            <div className = "form-group mb-2" style={{marginTop:"5%"}}>
                                <label className = "form-label">Password</label>
                                <input
                                    type = "password"
                                    placeholder = "password"
                                    name = "name"
                                    className = "form-control"
                                       
                                >
                                </input>
                            </div> 
                            <button className = "btn btn-primary" style={{marginTop:"5%",width:"70%"}}
                             onClick={()=>{navigate("/home")}}
                             >
                                Login
                            </button>
                             
                        </form>     
          
       </div>

      </div>
      </div>
       
  );
}

export default Login;

import React,{useState,useEffect} from 'react'
import PlayerService from '../services/PlayerService';
import { Link } from 'react-router-dom';
import ReadOnlyRowPlayer from '../components/ReadOnlyRowPlayer';
import {
    useNavigate
  } from "react-router-dom";

 
import pic from "../components/player.JPG";

const PlayerComponents=({players,showAdd,handleAdd,handleMatchData,setShowAdd,setEditedPlayer})=>{ 

    
    const navigate=useNavigate();

  
        return(
            <div>
            
           
                <h1 className = "text-center"><img src = {pic}/>Players List</h1>
                <button type="button" className = "btn btn-primary mb-2 player-right player-left" onClick={()=>{navigate('/add-player')}}> Add Players </button>
                <button type="button" className = "btn btn-primary mb-2 player-right" onClick={()=>{navigate('/add-match-data')}}>Add Match Data</button> 
                <button type="button" className = "btn btn-primary mb-2" >Print Page</button> 
                
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            
                            <th> Player ID </th>
                            <th> Name</th>
                            <th> Gender</th>
                            <th> School</th>
                            <th> Ranking</th>
                            <th> Wins</th>
                            <th> Losses</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            players.map(
                                player =>
                               <ReadOnlyRowPlayer player={player} setEditedPlayer={setEditedPlayer}/>
                            )
                        }
                    </tbody>
                </table>

                         
                
  


            </div>
        )
    


}

export default PlayerComponents
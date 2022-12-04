import React,{useState,useEffect} from 'react'
import PlayerService from '../services/PlayerService';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import ReadOnlyRowPlayer from '../components/ReadOnlyRowPlayer';
 
import Navbar from '../components/Navbar';

import AddPlayer from '../pages/AddPlayer';
import AddMatchData from '../pages/AddMatchData';
import pic from "../components/player.JPG";
import PlayerComponents from '../components/PlayerComponents';

const Players=()=>{ 

    const [players,setPlayers]=useState([]);
    const [editedPlayer, setEditedPlayer] = useState([]);
    
    const [showAdd,setShowAdd] =useState(false);
    const [showMatchData,setShowMatchData] = useState(false);
    
    
    
 


const handleAdd=()=>{
 
    
    setShowAdd(true);
    

   }
const handleMatchData=()=>{

    setShowMatchData(true);
}
    useEffect(()=>{
        PlayerService.getPlayers().then((response) => {
           
            setPlayers(response.data);
        });

    },[showAdd,showMatchData]);
    
  
        return(
            <div> 


<header>
        <Navbar /> 

        </header>
        <section>
        <PlayerComponents showAdd={showAdd}
                players={players}
                handleAdd={handleAdd}
                handleMatchData={handleMatchData}
                setShowAdd={setShowAdd}
                setEditedPlayer={setEditedPlayer}/>
         </section>

          


            </div>
        )
    


}

export default Players
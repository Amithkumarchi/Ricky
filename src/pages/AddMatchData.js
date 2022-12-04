import React, {useState} from 'react'
import DropdownList from "react-widgets/DropdownList";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Header from '../components/Header';
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';

const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis']
const AddMatchData=()=> {
    const navigate  = useNavigate();

    const handleSubmit=()=>
    {
         navigate('/home');
    }

    return (
        
        <div>

 

<header>
        <Navbar /> 

        </header>
        <section>
            <form>
                <h1 className = "text-center">Add Match Data</h1>
                <label className = "form-label"> Opponent School: </label>
                <select  >
                    <option value="BASIS Scottsdale">BASIS Scottsdale</option>
                    <option value="BASIS Chandler">BASIS Chandler</option>
                    <option value="BASIS Peoria">BASIS Peoria</option>
                    <option value="BASIS Phoenix">BASIS Phoenix</option>
                    <option value="BASIS Mesa">BASIS Mesa</option>
                </select>
            
                <table className = "table table-striped">
                    <thead className = 'stickyrow'>
                        <tr>
                            <th> Maches </th>
                            
                            <th> Home Player ID </th>
                            <th> Name </th>
                            <th> Game Wins</th>
                            <th> Oponnent Player ID </th>
                            <th> Name </th>
                            <th> Game Wins</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <th> Singles 1 </th>
                            <th>  
                                <input
                                    type = "text"
                                    placeholder = "Enter ID"
                                    
                                    className = "form-control"
                                    
                                >
                                </input>
                            </th>
                            <th>Rithvik Jandhyala</th>
                            <th> <input
                                    type = "text"
                                    placeholder = "Games Won"
                                   
                                    className = "form-control"
                                    
                                >
                                </input>
                            </th>
                            <th> <input
                                    type = "text"
                                    placeholder = "Enter ID"
                                   
                                    className = "form-control"
                                    
                                >
                                </input> 
                            </th>
                            <th>Text</th>
                            <th> <input
                                    type = "text"
                                    placeholder = "Games Won"
                                   
                                    className = "form-control"
                                    
                                >
                                </input></th>
                        </tr>
                    
                    </tbody>

                
                </table>
                <button className = "btn btn-success" onClick={handleSubmit}>Submit</button>
            </form>
            </section>
        </div>
    )
}
    


export default AddMatchData;
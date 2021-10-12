import React from 'react'
import {Rows} from '../components'
import {useHistory} from 'react-router-dom'

export  function Home({notes, DeleteNote, SelectNote}) {
    

    const history = useHistory();

    const handleClick = () => history.push('/add');



    return (
        <div>


              
              <button onClick={handleClick}>Add Note</button>
              <h4>Click on note to edit</h4>   
             
              <Rows notes={notes} DeleteNote={DeleteNote} SelectNote={SelectNote} />

         </div>
       
    )
}

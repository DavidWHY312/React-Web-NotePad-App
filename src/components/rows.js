import React from 'react'
import { TiTrash } from 'react-icons/ti';



export function Rows({notes,DeleteNote, SelectNote}){
return(

    <div className="notes-list">

    {notes.map((note) =>(
      
            <div className="displayNote" id={note.id}  >

       
            <div onClick={()=>SelectNote(note.id)}>
            
            <h3>Title: {note.title}</h3>
            <p>Content:{note.content}</p>

            </div>
            <TiTrash color="red" size={28}  onClick={()=>DeleteNote(note.id)}/>



  
        </div>
    ))}
   </div>



)}

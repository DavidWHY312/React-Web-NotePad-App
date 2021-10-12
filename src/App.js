import React, { useState, useEffect } from 'react';
import { Storage} from './services';
import {useHistory} from 'react-router-dom';
import {Router,Header} from './components'
import './App.css';

function App() {
  
    const history = useHistory();
    const navHome = () => history.push('/');
    const navEdit= (note) => history.push('/edit',note);


 
    const [notes, setNotes]=useState([]);
    const [id, setId]=useState(1);
  
    
  
      useEffect(() => {
        let storedId = Storage.getItem('id',1);
        setId(storedId);
        let storedNotes = Storage.getItem('notes',[]);
        setNotes(storedNotes);
                 
      }, []);
  
  
      //create note
      
      function AddNote(title,content){

      let newNote={
  
        id:id,
        title:title,
        content: content
      };
  
      //...spread operator
        
        Storage.setItem('notes', [newNote,...notes])

        setNotes([newNote,...notes]);
         

        setId(id+1);
        Storage.setItem('id', id+1)
        newNote=[]

        navHome();
    }
  
  
  
      function DeleteNote(id){
      const newNoteArray=notes.filter((note)=>note.id !==id)
          setNotes(newNoteArray);
          Storage.setItem('notes', newNoteArray)
      
    }
    
 
     function SelectNote(id){
       debugger
      const note=notes.find((note)=>note.id===id)    
      
      navEdit(note)

    
      
       
         

     }

     function EditNote(id,title,content){
       debugger
      const note=notes.find((note)=>note.id===id)   
      note.title=title;
      note.content=content;
      setNotes(notes);
      Storage.setItem('notes', notes)
      navHome()

     }
  
    
    function ClearNotes(){
     
      setNotes([])
      Storage.removeItem('notes');
      setId(1)
      Storage.removeItem('id')
      navHome()
      }
  
  
      return(
          <div className="App">
              <Header clearNotes={ClearNotes}/>
             
             <Router className="container"
              notes={notes} 
              DeleteNote={DeleteNote}  
              AddNote={AddNote} 
              SelectNote={SelectNote}
              EditNote={EditNote} 
             
             
             />
               

         </div>
         )
  }


export default App;

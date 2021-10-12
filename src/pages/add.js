import React, {useState} from 'react'
import { useHistory } from 'react-router';



export function Add({AddNote}) {
    const [title,setTitle]=useState('')
  
    const [content,setContent]=useState('')
  
    const history = useHistory();

    const handleClick = () => history.push('/');


    
    return (
        <div>
                <div className="addpage">
                      <h2 className="page-title">Create New Note</h2>
                          <div className="displayNote">
                              <h3>Title: <input type="text" name="titleNote" autoFocus onChange={t=> setTitle(t.target.value)} value={title}/></h3>
                              <h3>Content: </h3>
                              <textarea style={{width:400}} name="contextNote" placeholder="Enter Note Here" onChange={c=>setContent(c.target.value)} value={content}/><br/>
                              <button onClick={()=>AddNote(title,content)}>Add Note</button>
                              <button onClick={handleClick}>Cancel</button>

                          </div>
              
                  </div>
        </div>
    )
}


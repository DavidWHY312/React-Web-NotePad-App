import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom';





export function Edit({EditNote,notes}) {
  
    const history = useHistory();

    const handleClick = () => history.push('/');


    const note = useLocation();


    
    

     const [title,setTitle]=useState(note.state.title)
  
     const [content,setContent]=useState(note.state.content)
    
  
    
    return (
        <div>
                <div className="editpage">
                      <h2 className="page-title">Edit Note </h2>
                          <div className="displayNote">
                              <h3>Title: <input type="text" name="titleNote" autoFocus onChange={t=> setTitle(t.target.value)} value={title}/></h3>
                              <h3>Content: </h3>
                              <textarea style={{width:400}} name="contextNote" placeholder="Enter Note Here" onChange={c=>setContent(c.target.value)} value={content}/><br/>

                              <button onClick={()=>EditNote(note.state.id, title,content)}>Save</button>
                              <button onClick={handleClick}>Cancel</button>

                          </div>
              
                  </div>
        </div>
    )
}

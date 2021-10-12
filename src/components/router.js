import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {Add, Edit, Home} from '../pages';

export function Router(props) {
    return (
        <Switch>
        
        <Route path="/" component={Home} exact >
            <Home notes={props.notes} 
            DeleteNote={props.DeleteNote} 
            SelectNote={props.SelectNote}
         
            
            
            
            />

        </Route>
    

        <Route path="/edit/" component={Edit}>
            <Edit
            
            EditNote={props.EditNote}
            
            notes={props.notes} 
            
            
            />
        </Route>
    
        <Route path="/add" component={Add} >

            <Add 
             AddNote={props.AddNote}              
                                   
            />
        </Route>

        
    <Route>
        <div className="page">
            404 - Not found!
    </div>

    </Route>
    </Switch>
    )
}

import {useLocation} from 'react-router-dom'



export function Header({clearNotes}){

    const location=useLocation()

    return (
        <div>
            <h1>Note App</h1>

            {/* clear all button only appears on homescreen */}
            {location.pathname==='/' && (
            
            <button onClick={clearNotes}>Clear All</button>
            
            )}

        </div>

    )


}
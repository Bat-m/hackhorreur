import React from 'react';

export default function Character({heroes}){
    

    
        return(
            <div className="Characters">
                <div><img src={heroes.image}/><h3>{heroes.name}</h3></div>
            </div>
        )
    
}
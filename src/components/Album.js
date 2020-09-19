
      import React from 'react';
      
      import React, { useEffect } from "react";
//Redux state is now in the props of this component

const Album = (props) => {
    const { album } = props;
    console.log(album);

    return (
        <div style={{width: "150px", height: "300px", display: "inline", paddingRight: "30px"}}>
           
            <form onSubmit = {handleSubmit}>
                <label>
                Artist:
                    <input type ="text" album ="album"/>
                    <h1>{album.title}</h1>        
                    <h2>{album.subtitle}</h2>
                    <p>Add to Cart<input type ="submit"        
                     value = "Submit" /></p>
                </label>
            </form>
        </div>

    );
}



export default Album;

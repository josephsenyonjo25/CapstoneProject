    
import React from "react";
//Redux state is now in the props of this component

const Artist = (props) => {
    const { artist } = props;
    console.log(artist);

    return (
        <div style={{width: "150px", height: "300px", display: "inline", paddingRight: "30px"}}>
           
            <form>
                <label>
                Artist:
                    <input type ="text" artist ="artist"/>
                    <h1>{artist.title}</h1>        
                    <h2>{artist.subtitle}</h2>
                    <p>Add to Cart<input type ="submit"        
                     value = "Submit" /></p>
                </label>
            </form>
        </div>

    );
}


export default Artist;


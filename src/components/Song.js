import React, { useEffect } from "react";
//Redux state is now in the props of this component

const Song = (props) => {
    const { song } = props;
    console.log(song);

    return (
        <div style={{width: "150px", height: "300px", display: "inline", paddingRight: "30px"}}>
            <h1>{song.title}</h1>
            <h2>{song.subtitle}</h2>
        </div>

    )
}

export default Song;
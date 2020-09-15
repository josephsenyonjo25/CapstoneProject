import React, {Component} from 'react';
import '../App.css';

export const Artist = ({ artist }) => (

        <div className="Artists"> 
           <form>
                <label>Search For An Artist</label>
                <input type ="text" placeholder="Enter artist here"/>
                <button type ="submit" >Get Artist</button>
            </form>
            <p>Artist: </p>
        </div>
      );
 
export default Artist;

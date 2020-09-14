import React, {Component} from 'react';
import '../App.css';

class Artist extends Component {
  artist =() => {
    this.props.dispatch({type:'ARTIST'});
  }
    render() { 
      return (
        <div className="Artists"> 
           <form>
                <label>Search For An Artist</label>
                <input type ="text" placeholder="Enter artist here"/>
                <button type ="submit" onClick ={this.artist}>Get Artist</button>
            </form>
            <p>Artist: {this.props.artist}</p>
        </div>
      );
    }
  }


export default Artist;

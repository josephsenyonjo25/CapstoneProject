import React from 'react';
//import {fetchSongs} from '../actions/SongsActions'
import {fetchSongs, getSongs} from '../actions/SongsActions'
import { connect } from 'react-redux';
//import {Songs} from '../pages/SongsPage' 
import '../App.css';

class Song extends React.Component{

    constructor() {
        super();
        this.state = {
            song: ''
        };
    }
    componentDidMount(){
        console.log(this.props)
        //this.props.dispatch(GET_SONGS)
        this.props.dispatch(fetchSongs())
     }
    handleSubmit = (e) =>{
    e.preventDefault()
    this.props.dispatch(fetchSongs())
    }
    render(){

     return (
        
         <form onSubmit= {this.handleSubmit}>
            <label>
                Song:
                <input type ="text" song ="song" />
                </label> 
                <button>Submit</button>
         </form>
     );

    }
}
      
      export default connect() (Song);




import React from 'react';
import { fetchSongs, getSongs } from '../actions/SongsActions'
import { connect } from 'react-redux';
import Song from "../components/Song"
import '../App.css';

class SongsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            song: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(fetchSongs(this.state.song))
    }

    renderSongs = () => {
        if (this.props.loading) return <p> Loading Songs</p>
        if (this.props.hasErrors) return <p> Unable to display Songs.</p>
        return this.props.songs.map(song => <Song song={song.track}/>)
    }

    render() {
        return (
            <>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        Song:
                <input value={this.state.song} onChange={e => this.setState({ song: e.target.value })} type="text" song="song" />
                    </label>
                    <button>Submit</button>
                </form>
                {this.renderSongs()}
            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        loading: state.song.loading,
        hasErrors: state.song.hasErrors,
        songs: state.song.songs
    }
}

export default connect(mapStateToProps)(SongsPage);
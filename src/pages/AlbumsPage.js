import React, { useEffect } from "react";
import { connect } from 'react-redux';
import {  Album } from '../components/Album';
import '../App.css';
//Bring in the Async
import {fetchAlbums} from '../actions/AlbumsActions'

//Redux state is now in the props of this component
class AlbumsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            album: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(fetchAlbums(this.state.album))
    }

    renderSongs = () => {
        if (this.props.loading) return <p> Loading Albums</p>
        if (this.props.hasErrors) return <p> Unable to display Albums.</p>
        return this.props.albums.map(album => <Album album={album.track}/>)
    }

    render() {
        return (
            <>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        Album:
                <input value={this.state.album} onChange={e => this.setState({ album: e.target.value })} type="text" album="album" />
                    </label>
                    <button>Submit</button>
                </form>
                {this.renderAlbums()}
            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        loading: state.album.loading,
        hasErrors: state.album.hasErrors,
        songs: state.album.albums
    }
}

export default connect(mapStateToProps)(AlbumsPage);

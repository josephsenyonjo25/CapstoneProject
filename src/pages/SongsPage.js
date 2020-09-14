import React, { useEffect } from "react";
import { connect } from 'react-redux';
import {  Song } from '../components/Song';

//Bring in the Async
import {fetchSongs} from '../actions/SongsActions'

//Redux state is now in the props of this component

const SongsPage = ({ dispatch,loading, Songs, hasErrors}) => {
    useEffect(() => {
        dispatch(fetchSongs())
    }, [dispatch])

    //show loading, error, or success

    const renderSongs = () => {
        if (loading) return <p> Loading Songs</p>
        if (hasErrors) return <p> Unable to display Songs.</p>
        console.log(Songs)
        return Songs.map(Songs => <Songs key={Song.id} Song={Song} />)
    }    
    return (
    <section>
    <div className ="Songspage">
    <h1 id ="songs">Songs</h1>
    {renderSongs()}
    </div>
    </section>
    )
}
const mapStateToProps = (state) => ({
    loading: state.Songs.loading,
    posts: state.Songs.Songs,
    hasErrors: state.Songs.hasErrors,
})

export default connect(mapStateToProps)(SongsPage);
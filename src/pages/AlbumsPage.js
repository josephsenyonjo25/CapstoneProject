import React, { useEffect } from "react";
import { connect } from 'react-redux';
import {  Album } from '../components/Album';

//Bring in the Async
import {fetchAlbums} from '../actions/AlbumsActions'

//Redux state is now in the props of this component

const AlbumsPage = ({ dispatch,loading, Album, hasErrors}) => {
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch])

    //show loading, error, or success

    const renderAlbums = () => {
        if (loading) return <p> Loading Albums</p>
        if (hasErrors) return <p> Unable to display Albums.</p>
        console.log(Album)
        return Album.map(Album => <Album key={Album.id} Album={Album} />)
    }    
    return (
    <section>
    <div className ="albumspage">
    <h1 id ="albums">Albums</h1>
    {renderAlbums()}
    </div>
    </section>
    )
}
const mapStateToProps = (state) => ({
    loading: state.Albums.loading,
    Albums: state.Albums.Albums,
    hasErrors: state.Albums.hasErrors,
})

export default connect(mapStateToProps)(AlbumsPage);
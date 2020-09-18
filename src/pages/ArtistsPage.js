
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import  Artist from '../components/Artist';

//Bring in the Async
import {fetchArtists} from '../actions/ArtistsActions'

//Redux state is now in the props of this component

const ArtistsPage = ({ dispatch,loading, Artists, hasErrors}) => {
    useEffect(() => {
        dispatch(fetchArtists())
    }, [dispatch])

    //show loading, error, or success

    const renderArtists = () => {
        if (loading) return <p> Loading Artists</p>
        if (hasErrors) return <p> Unable to display Artists.</p>
        console.log(Artists)
        return Artist.map(Artist => <Artist key={Artist.id} Artist={Artist} />)
    }    
    return (
    <section>
    <div className ="Artistpage">
    <h1 id ="artists">Artists</h1>
    {renderArtists()}
    </div>
    </section>
    )
}
const mapStateToProps = (state) => ({
    loading: state.Artists.loading,
    Artists: state.Artists.Artists,
    hasErrors: state.Artists.hasErrors,
})

export default connect(mapStateToProps)(ArtistsPage);
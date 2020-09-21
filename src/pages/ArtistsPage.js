
import React, { useEffect } from "react";
import {fetchArtists} from '../actions/ArtistsActions';
import { connect } from 'react-redux';
import  Artist from '../components/Artist';
import { Container, Col, Row } from 'reactstrap';

//Bring in the Async


//Redux state is now in the props of this component

class ArtistsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            artist: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(fetchArtists(this.state.artist))
    }

    renderArtists = () => {
        if (this.props.loading) return <p> Loading Songs</p>
        if (this.props.hasErrors) return <p> Unable to display Songs.</p>
        return (
            <Container>
                <Row>
                    {this.props.artists.map(artist => <Col><Artist key={artist.name} artist={artist.name} /></Col>)}
                </Row>
            </Container>
        )
    }

    render() {
        return (
            <>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        Artist:
                <input value={this.state.artist} onChange={e => this.setState({ artist: e.target.value })} type="text" artist="artist" />
                    </label>
                    <button>Submit</button>
                </form>
                {this.renderArtists()}
            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        loading: state.artist.loading,
        hasErrors: state.artist.hasErrors,
        artists: state.artist.artists
    }
}
export default connect(mapStateToProps)(ArtistsPage);

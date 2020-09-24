import React from "react";
import { fetchArtists } from "../actions/ArtistsActions";
import { connect } from "react-redux";
import Artist from "../components/Artist";
import { Container, Col, Row } from "reactstrap";
import Fade from "react-reveal/Fade";

//Bring in the Async

//Redux state is now in the props of this component

class ArtistsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: props.searchTerm,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(fetchArtists(this.state.artist));
  };

  renderArtists = () => {
    if (this.props.loading) return <p> Loading Artists</p>;
    if (this.props.hasErrors) return <p> Unable to display artists.</p>;
    if (!this.props.artists) return <p>No Artists Found</p>;

    return (
      <Container>
        <Fade bottom>
          <Row>
            {this.props.artists.map((artist) => (
              <Col key={artist.idArtist} xs={4} lg={3}>
                <Artist artist={artist} />
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    );
  };

  render() {
    return (
      <div className="Search">
        <form
          className="d-flex justify-content-center"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <label>
            Artist:
            <input
              value={this.state.artist}
              onChange={(e) => this.setState({ artist: e.target.value })}
              type="text"
              artist="artist"
            />
          </label>
          <button>Submit</button>
        </form>
        {this.renderArtists()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.artist.loading,
    hasErrors: state.artist.hasErrors,
    artists: state.artist.artists,
    searchTerm: state.artist.searchTerm,
  };
};
export default connect(mapStateToProps)(ArtistsPage);

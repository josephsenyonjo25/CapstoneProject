import React, { useEffect } from "react";
import { fetchSongs, getSongs } from "../actions/SongsActions";
import { connect } from "react-redux";
import Song from "../components/Song";
import { Container, Col, Row } from "reactstrap";
import Fade from "react-reveal/Fade";

class SongsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: props.searchTerm,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(fetchSongs(this.state.song));
  };

  renderSongs = () => {
    if (this.props.loading) return <p> Loading Songs</p>;
    if (this.props.hasErrors) return <p> Unable to display songs.</p>;
    return (
      <Container>
        <Fade bottom>
          <Row>
            {this.props.songs.map((song) => (
              <Col key={song.track.url} xs={4} lg={3}>
                <Song song={song.track} />
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
            Song:
            <input
              value={this.state.song}
              onChange={(e) => this.setState({ song: e.target.value })}
              type="text"
              song="song"
            />
          </label>
          <button>Submit</button>
        </form>
        {this.renderSongs()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.song.loading,
    hasErrors: state.song.hasErrors,
    songs: state.song.songs,
    searchTerm: state.song.searchTerm,
  };
};

export default connect(mapStateToProps)(SongsPage);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import Album from "../components/Album";
import { fetchAlbums } from "../actions/AlbumsActions";
import { Container, Col, Row } from "reactstrap";
import Fade from "react-reveal/Fade";

//Redux state is now in the props of this component
class AlbumsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: props.searchTerm,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(fetchAlbums(this.state.album));
  };

  renderAlbums = () => {
    if (this.props.loading) return <p> Loading Albums</p>;
    if (this.props.hasErrors) return <p> Unable to display albums.</p>;
    return (
      <Container>
        <Fade bottom>
          <Row>
            {this.props.albums.map((album) => {
              return (
                <Col key={album.md5_image} xs={4} lg={3}>
                  <Album album={album} />
                </Col>
              );
            })}
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
            Album:
            <input
              value={this.state.album}
              onChange={(e) => this.setState({ album: e.target.value })}
              type="text"
              album="album"
            />
          </label>
          <button>Submit</button>
        </form>
        {this.renderAlbums()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.album.loading,
    hasErrors: state.album.hasErrors,
    albums: state.album.albums,
    searchTerm: state.album.searchTerm,
  };
};

export default connect(mapStateToProps)(AlbumsPage);

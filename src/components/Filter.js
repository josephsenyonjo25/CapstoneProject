import React, { Component } from "react";
import { connect } from "react-redux";
import { filterAlbums, sortAlbums } from "../actions/album2Actions";
import { connect } from "react-redux";
class Filter extends Component {
  render() {
    return !this.props.filteredAlbums ? (
      <div>Loading ...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          {this.props.filteredAlbums.length}Albums
        </div>
        <div className="filter-sort">
          Order{""}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortAlbums(this.props.filteredAlbums, e.target.value)
            }
          >
            {" "}
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
          <div className="filter-genre">
            Filter{""}
            <select
              value={this.props.genre}
              onChange={(e) =>
                this.props.filterAlbums(this.props.products, e.target.value)
              }
            >
              <option value="">Jazz</option>
              <option value="">Pop</option>
              <option value="">Blues</option>
              <option value="">Hip Hop</option>
              <option value="">Rock</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    title: state.albums.title,
    sort: state.albums.sort,
    albums: state.albums.filterAlbums,
    filteredAlbums: state.albums.filterItems,
  }),
  {
    filterAlbums,
    sortAlbums,
  }
)(Filter);

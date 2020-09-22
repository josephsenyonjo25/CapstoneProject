const { ReactComponent } = require("*.svg");

import React, {Component} from 'react';

export default class Filter extends Component {
    render(){
        return(
        <div className="filter">
            <div className="filter-result">{this.props.count}</div>
            <div className="filter-sort">
            Order{""}
            <select value ={this.props.sort} onChange={this.props.sortAlbums}>
                <option>Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
            <div className="filter-genre">
                Filter{""}
                <select value={this.props.genre} onChange={this.props.filterAlbums}>
                    <option value="">Jazz</option>
                    <option value="">Pop</option>
                    <option value="">Blues</option>
                    <option value="">Hip Hop</option>
                    <option value="">Rock</option>
                </select>
            </div>
        </div>
 
        );
    }
}
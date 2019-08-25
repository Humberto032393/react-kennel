import React, { Component } from 'react';
import './Location.css'
class LocationCard extends Component {
    render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./downtownnashville.jpeg')} alt="My Location" />
                </picture>
                <h2>Name: <span className="card-location">{this.props.location.name}</span></h2>
                <p>Address: {this.props.location.address}</p>
              </div>
          </div>
        );
      }
}

export default LocationCard;
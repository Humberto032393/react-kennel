import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Location.css'
class LocationCard extends Component {
    render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./downtownashville.jpg')} alt="My Location" />
                </picture>
                <h2>Name: <span className="card-location">{this.props.location.name}</span></h2>
                <p>Address: {this.props.location.address}</p>
                <Link to={`/locations/${this.props.location.id}`}><button>Location Details</button></Link>
                <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Closed</button>

              </div>
          </div>
        );
      }
}

export default LocationCard;
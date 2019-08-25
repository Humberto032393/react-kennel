import React, { Component } from 'react';
import './Owner.css'
class OwnerCard extends Component {
    render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./downtownnashville.jpeg')} alt="Owner" />
                </picture>
                <h2>Name: <span className="card-owner">{this.props.owner.name}</span></h2>
                <p>Phone Number: {this.props.owner.phoneNumber}</p>
              </div>
          </div>
        );
      }
}

export default OwnerCard;
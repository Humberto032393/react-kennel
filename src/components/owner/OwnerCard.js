import React, { Component } from 'react';
import './Owner.css'
class OwnerCard extends Component {
    render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./downtownashville.jpg')} alt="Owner" />
                </picture>
                <h2>Name: <span className="card-owner">{this.props.owner.name}</span></h2>
                <p>Phone Number: {this.props.owner.phoneNumber}</p>
                <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Close Account</button>
              </div>
          </div>
        );
      }
}

export default OwnerCard;
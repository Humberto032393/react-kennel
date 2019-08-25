import React, { Component } from 'react';
import './Employee.css'
class EmployeeCard extends Component {
    render() {
        return (
          <div className="card">
              <div className="card-content">
                <picture>
                  <img src={require('./dog.svg')} alt="My Employee" />
                </picture>
                <h2>Name: <span className="card-employeeName">{this.props.employee.name}</span></h2>
              </div>
          </div>
        );
      }
}

export default EmployeeCard;
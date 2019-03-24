import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class notifAvailable extends Component {
  render() {
      return (
            <div className="row">
                <Alert color="success">
                    SUCCESS
                </Alert>
            </div>
        );
    }
}


export default notifAvailable;
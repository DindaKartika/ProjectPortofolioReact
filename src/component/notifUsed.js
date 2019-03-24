import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class notifUsed extends Component {
  render() {
      return (
            <div className="row">
                <Alert color="warning">
                    Name has been used. Please find another one.
                </Alert>
            </div>
        );
    }
}


export default notifUsed;
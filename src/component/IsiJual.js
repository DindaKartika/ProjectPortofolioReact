import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class IsiJual extends Component {
  render() {
      return (
        <div className="isi-footer-atas" id="isi-jual">
            <span><Link to="/start-shop">Cara Berjualan</Link></span>
            <br/>
            <span><Link to="/pencairan-dana">Pencairan Dana</Link></span>
            <br/>
            <span><Link to="/register-publisher">Daftar Official Publisher</Link></span>
        </div>
        );
    }
}


export default IsiJual;
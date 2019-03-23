import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class IsiBantuan extends Component {
  render() {
      return (
        <div className="isi-footer-atas" id="isi-bantuan">
            <span><Link to="/faq">FAQ</Link></span>
            <br/>
            <span><Link to="/contact">Hubungi Kami</Link></span>
            <br/>
            <span><Link to="/komplain">Komplain Pesanan</Link></span>
        </div>
        );
    }
}


export default IsiBantuan;
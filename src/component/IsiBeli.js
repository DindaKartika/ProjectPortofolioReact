import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class IsiBeli extends Component {
  render() {
      return (
        <div className="isi-footer-atas" id="isi-beli">
            <span><Link to="/cara-belanja">Cara Belanja</Link></span>
            <br/>
            <span><Link to="/pembayaran">Pembayaran</Link></span>
            <br/>
            <span><Link to="/pengembalian-dana">Pengembalian Dana</Link></span>
            <br/>
            <span><Link to="/trending">Trending</Link></span>
        </div>
        );
    }
}


export default IsiBeli;
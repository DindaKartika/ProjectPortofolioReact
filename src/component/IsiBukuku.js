import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class IsiBukuku extends Component {
  render() {
      return (
        <div className="isi-footer-atas" id="isi-bukuku">
            <span><Link to="/about">Tentang Kami</Link></span>
            <br/>
            <span><Link to="/kisah-penjual">Kisah Penjual</Link></span>
            <br/>
            <span><Link to="/official-publisher">Official Publisher</Link></span>
            <br/>
            <span><Link to="/kegiatan-kami">Kegiatan Kami</Link></span>
        </div>
        );
    }
}


export default IsiBukuku;
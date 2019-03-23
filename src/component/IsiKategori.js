import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class IsiKategori extends Component {
  render() {
      return (
          <div className="row">
            <div className="col-12 d-md-none d-block isi-explore" id="isi-kategori">
            <div className="row">
                <div className="col-6">
                    <span><Link to="/kategori/novel">Novel</Link></span>
                    <br/>
                    <span><Link to="/kategori/biografi">Biografi</Link></span>
                    <br/>
                    <span><Link to="/kategori/misteri">Misteri</Link></span>
                    <br/>
                    <span><Link to="/kategori/agama">Agama</Link></span>
                    <br/>
                    <span><Link to="/kategori/anak-anak">Anak-Anak</Link></span>
                    <br/>
                    <span><Link to="/kategori/ekonomi">Ekonomi</Link></span>
                </div>
                <div className="col-6">
                    <span><Link to="/kategori/ebook">Ebook</Link></span>
                    <br/>
                    <span><Link to="/kategori/politik">Politik</Link></span>
                    <br/>
                    <span><Link to="/kategori/bahasa">Bahasa</Link></span>
                    <br/>
                    <span><Link to="/kategori/majalah">Majalah</Link></span>
                    <br/>
                    <span><Link to="/kategori/hukum">Hukum</Link></span>
                    <br/>
                    <span><Link to="/kategori/sastra">Sastra</Link></span>
                </div>
            </div>
        </div>
    </div>
    );
  }
}


export default IsiKategori;
import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import Facebook from "./../image/icon/facebook.png";
import Twitter from "./../image/icon/twitter.png";
import Instagram from "./../image/icon/instagram.png";
import Pinterest from "./../image/icon/pinterest.png";

class Footer extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="footer-atas">
          <div className="row">
            <div className="col-md-3 d-md-block d-none">
              <h2>BukuKu</h2>
              <span><Link to="/about">Tentang Kami</Link></span>
              <br/>
              <span><Link to="/kisah-penjual">Kisah Penjual</Link></span>
              <br/>
              <span><Link to="/official-publisher">Official Publisher</Link></span>
              <br/>
              <span><Link to="/kegiatan-kami">Kegiatan Kami</Link></span>
            </div>
            <div className="col-md-3 d-md-block d-none">
              <h2>Beli</h2>
              <span><Link to="/cara-belanja">Cara Belanja</Link></span>
              <br/>
              <span><Link to="/pembayaran">Pembayaran</Link></span>
              <br/>
              <span><Link to="/pengembalian-dana">Pengembalian Dana</Link></span>
              <br/>
              <span><Link to="/trending">Trending</Link></span>
            </div>
            <div className="col-md-3 d-md-block d-none">
              <h2>Jual</h2>
              <span><Link to="/cara-berjualan">Cara Berjualan</Link></span>
              <br/>
              <span><Link to="/pencairan-dana">Pencairan Dana</Link></span>
              <br/>
              <span><Link to="/register-publisher">Daftar Official Publisher</Link></span>
            </div>
            <div className="col-md-3 d-md-block d-none">
              <h2>Bantuan</h2>
              <span><Link to="/faq">FAQ</Link></span>
              <br/>
              <span><Link to="/contact">Hubungi Kami</Link></span>
              <br/>
              <span><Link to="/komplain">Komplain Pesanan</Link></span>
            </div>
          </div>
          <div className="row footer-atas-hidden">
            <div className="col-3 d-sm-block d-md-none">
              <button onclick="open_bukuku()">BukuKu</button>
            </div>
            <div className="col-3 d-sm-block d-md-none">
              <button onclick="open_beli()">Beli</button>
            </div>
            <div className="col-3 d-sm-block d-md-none">
              <button onclick="open_jual()">Jual</button>
            </div>
            <div className="col-3 d-sm-block d-md-none">
              <button onclick="open_bantuan()">Bantuan</button>
            </div>
          </div>
          <div className="isi-footer-atas" id="isi-bukuku">
            <span><Link to="/about">Tentang Kami</Link></span>
            <br/>
            <span><Link to="/kisah-penjual">Kisah Penjual</Link></span>
            <br/>
            <span><Link to="/official-publisher">Official Publisher</Link></span>
            <br/>
            <span><Link to="/kegiatan-kami">Kegiatan Kami</Link></span>
          </div>
          <div className="isi-footer-atas" id="isi-beli">
            <span><Link to="/cara-belanja">Cara Belanja</Link></span>
            <br/>
            <span><Link to="/pembayaran">Pembayaran</Link></span>
            <br/>
            <span><Link to="/pengembalian-dana">Pengembalian Dana</Link></span>
            <br/>
            <span><Link to="/trending">Trending</Link></span>
          </div>
          <div className="isi-footer-atas" id="isi-jual">
            <span><Link to="/cara-berjualan">Cara Berjualan</Link></span>
            <br/>
            <span><Link to="/pencairan-dana">Pencairan Dana</Link></span>
            <br/>
            <span><Link to="/register-publisher">Daftar Official Publisher</Link></span>
          </div>
          <div className="isi-footer-atas" id="isi-bantuan">
            <span><Link to="/faq">FAQ</Link></span>
            <br/>
            <span><Link to="/contact">Hubungi Kami</Link></span>
            <br/>
            <span><Link to="/komplain">Komplain Pesanan</Link></span>
          </div>
        </div>
        <div className="footer-bawah">
          <div className="row">
            <div className="col-md-2">
              <span className="copyright">&copy; 2019, BukuKu</span>
            </div>
            <div className="col-md-7"></div>
            <div className="col-md-3">
              <div className="contact-us">
                <span>Contact Us</span>
                <a href="https://facebook.com"><img src={Facebook}/></a>
                <a href="https://twitter.com"><img src={Twitter}/></a>
                <a href="https://pinterest.com"><img src={Pinterest}/></a>
                <a href="https://instagram.com"><img src={Instagram}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

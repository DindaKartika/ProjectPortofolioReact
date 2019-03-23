import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import Facebook from "./../image/icon/facebook.png";
import Twitter from "./../image/icon/twitter.png";
import Instagram from "./../image/icon/instagram.png";
import Pinterest from "./../image/icon/pinterest.png";

import IsiBukuku from "./IsiBukuku.js"
import IsiBeli from "./IsiBeli.js"
import IsiJual from "./IsiJual.js"
import IsiBantuan from "./IsiBantuan.js"

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bukuku: false,
      beli: false,
      jual: false,
      bantuan: false
    };

    this.openBukuku = this.openBukuku.bind(this);
    this.openBeli = this.openBeli.bind(this);
    this.openJual = this.openJual.bind(this);
    this.openBantuan = this.openBantuan.bind(this);
  }

  openBukuku() {
    this.setState(prevState => ({
        bukuku: !prevState.bukuku,
        beli:false,
        jual:false,
        bantuan: false
      }));
    }
  openBeli() {
    this.setState(prevState => ({
        beli: !prevState.beli,
        bukuku:false,
        jual:false,
        bantuan: false
        }));
    }
  openJual() {
    this.setState(prevState => ({
        jual: !prevState.jual,
        bukuku: false,
        beli: false,
        bantuan: false
        }));
    }
  openBantuan() {
    this.setState(prevState => ({
        bantuan: !prevState.bantuan,
        bukuku: false,
        beli: false,
        jual: false
        }));
    }
  
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
              <span><Link to="/start-shop">Cara Berjualan</Link></span>
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
              <button onClick={this.openBukuku}>BukuKu</button>
            </div>
            <div className="col-3 d-sm-block d-md-none">
              <button onClick={this.openBeli}>Beli</button>
            </div>
            <div className="col-3 d-sm-block d-md-none">
              <button onClick={this.openJual}>Jual</button>
            </div>
            <div className="col-3 d-sm-block d-md-none">
              <button onClick={this.openBantuan}>Bantuan</button>
            </div>
          </div>
          {this.state.bukuku && <IsiBukuku />}
          {this.state.beli && <IsiBeli />}
          {this.state.jual && <IsiJual />}
          {this.state.bantuan && <IsiBantuan />}
        </div>
        <div className="footer-bawah">
          <div className="row">
            <div className="col-lg-2 col-md-4">
              <span className="copyright">&copy; 2019, BukuKu</span>
            </div>
            <div className="col-lg-7 col-md-3"></div>
            <div className="col-lg-3 col-md-5">
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

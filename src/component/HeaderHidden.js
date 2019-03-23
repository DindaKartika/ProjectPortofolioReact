import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import IsiKategori from './IsiKategori'
import IsiPenulis from './IsiPenulis'
import IsiPenerbit from './IsiPenerbit'

class HeaderHidden extends Component {
    constructor(props) {
        super(props);
        this.state = {
          penulis: false,
          penerbit: false,
          kategori: false
        };
    
        this.openKategori = this.openKategori.bind(this);
        this.openPenulis = this.openPenulis.bind(this);
        this.openPenerbit = this.openPenerbit.bind(this);
      }

      openKategori() {
        this.setState(prevState => ({
            kategori: !prevState.kategori,
            penulis:false,
            penerbit:false
          }));
        }
    openPenulis() {
        this.setState(prevState => ({
            penulis: !prevState.penulis,
            kategori:false,
            penerbit:false
            }));
        }
    openPenerbit() {
        this.setState(prevState => ({
            penerbit: !prevState.penerbit,
            kategori: false,
            penulis: false
            }));
        }

  render() {
      return (
          <div className="row header-hidden">
            <div className="col-lg-4 d-lg-block d-none">
            <h1>Kategori</h1>
            <div className="row isi-header-hidden">
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
                <div className="col-md-4 col-sm-6">
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
        <div className="col-lg-4 d-lg-block d-none">
            <h1>Penulis</h1>
            <div className="row isi-header-hidden">
                <div className="col-6">
                    <span><Link to="/penulis/aleazalea">AleaZalea</Link></span>
                    <br/>
                    <span><Link to="/penulis/ilana tan">Ilana Tan</Link></span>
                    <br/>
                    <span><Link to="/penulis/dahlan iskan">Dahlan Iskan</Link></span>
                </div>
                <div className="col-md-4 col-sm-6">
                    <span><Link to="/penulis/wulan fadi">Wulan Fadi</Link></span>
                    <br/>
                    <span><Link to="/penulis/dee lestari">Dee Lestari</Link></span>
                    <br/>
                    <span><Link to="/penulis/crowdstoria">Crowdstoria</Link></span>
                </div>
            </div>
        </div>
        <div className="col-lg-4 d-lg-block d-none">
            <h1>Penerbit</h1>
            <div className="row isi-header-hidden">
                <div className="col-6">
                    <span><Link to="/penerbit/gramedia">Gramedia Pustaka Utama</Link></span>
                    <br/>
                    <span><Link to="/penerbit/bentang pustaka">Bentang Pustaka</Link></span>
                    <br/>
                    <span><Link to="/penerbit/ae publishing">AE Publishing</Link></span>
                </div>
                <div className="col-md-4 col-sm-6">
                    <span><Link to="/penerbit/mizan">Mizan</Link></span>
                    <br/>
                    <span><Link to="/penerbit/edwrite publisher">EdWrite Publisher</Link></span>
                </div>
            </div>
        </div>
        <div className="col-4 d-lg-none d-block">
            <button onClick={this.openKategori}>Kategori</button>
        </div>
        <div className="col-4 d-lg-none d-block">
            <button onClick={this.openPenulis}>Penulis</button>
        </div>
        <div className="col-4 d-lg-none d-block">
            <button onClick={this.openPenerbit}>Penerbit</button>
        </div>
        <div className="col-12">
            {this.state.kategori && <IsiKategori />}
        </div>
        <div className="col-12">
            {this.state.penulis && <IsiPenulis />}
        </div>
        <div className="col-12">
            {this.state.penerbit && <IsiPenerbit />}
        </div>
    </div>
    );
  }
}


export default HeaderHidden;
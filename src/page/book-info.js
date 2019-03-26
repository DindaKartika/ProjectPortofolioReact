import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import Minus from './../image/icon/minus-blue.png'
import Plus from './../image/icon/plus.png'

import JNE from './../image/logo/jne.png'
import JNT from './../image/logo/j&t.png'
import Pos from './../image/logo/pos.png'
import Wahana from './../image/logo/wahana.png'

class BookInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            Books: {},
            Details: {},
            Shop: {},
            method:{},
            qty: 1,
            ubahGambar: false,
            ubahKategori: false,
            ubahHarga: false,
            ubahKodePromo: false
            };
        this.dijual = this.dijual.bind(this);
        this.tidakDijual = this.tidakDijual.bind(this);
        this.Edit = this.Edit.bind(this);
        this.UbahGambar = this.UbahGambar.bind(this);
        this.UbahKategori = this.UbahKategori.bind(this);
        this.UbahHarga = this.UbahHarga.bind(this);
        this.UbahKodePromo = this.UbahKodePromo.bind(this);
        }

    componentDidMount = () =>{
        const self = this;
        const id_buku = this.props.location.pathname.slice(11)
        const tokens = localStorage.getItem('token')
        console.log(id_buku)
        axios
        .get('http://0.0.0.0:5000/toko/buku/' + id_buku, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(function(response){
            self.setState({Books: response.data});
            self.setState({Details: response.data.detail})
            self.setState({Shop: response.data.shop})
            self.setState({harga: response.data.harga});
            self.setState({gambar: response.data.gambar});
            self.setState({kategori: response.data.kategori});
            self.setState({kode_promo: response.data.kode_promo});
            localStorage.setItem('book', response.data)
            localStorage.setItem('shop', response.data.shop)
            localStorage.setItem('kurir', response.data.kurir)
            console.log(response.data);
            console.log(response.data.detail)
        })
        .catch(function(error){
            console.log(error);
        })
    }

    dijual(){
        const self = this;
        const {Books} = this.state;
        const {method} = this.state;
        const id_buku = this.props.location.pathname.slice(11)
        const data={
            status: 'dijual'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/toko/buku/' + id_buku, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/produk-saya"))
            self.props.history.push("/produk-saya");
        })
        .catch(error => {
            console.log(error);
        })
    }

    tidakDijual(){
        const self = this;
        const {Books} = this.state;
        const {method} = this.state;
        const id_buku = this.props.location.pathname.slice(11)
        const data={
            status: 'tidak dijual'
        };

        console.log(data)

        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/toko/buku/' + id_buku, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            console.log(self.props.history.push("/produk-saya"))
            self.props.history.push("/produk-saya");
        })
        .catch(error => {
            console.log(error);
        })
    }

      changeInput = e =>{
          this.setState({[e.target.name]: e.target.value});
      };

    Edit(){
        const self = this;
        const id_buku = this.props.location.pathname.slice(11)
        const {harga, gambar, kategori, kode_promo} = this.state;
        const data={
            harga: harga,
            gambar: gambar,
            kategori: kategori,
            kode_promo: kode_promo
        };
        console.log(data)
        const tokens = localStorage.getItem('token')
        axios
        .put('http://0.0.0.0:5000/toko/buku/' + id_buku, data, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(response => {
            console.log(response.data)
            self.setState({ubahGambar: false})
            self.setState({ubahKategori: false})
            self.setState({ubahHarga: false})
            self.setState({ubahKodePromo: false})
            self.props.history.push("/produk-saya");
        })
        .catch(error => {
            console.log(error);
        })
    }

    UbahGambar() {
        this.setState(prevState => ({
            ubahGambar: !prevState.ubahGambar
            }));
        }
    UbahKategori() {
        this.setState(prevState => ({
            ubahKategori: !prevState.ubahKategori
            }));
        }
    UbahHarga() {
        this.setState(prevState => ({
            ubahHarga: !prevState.ubahHarga
            }));
        }
    UbahKodePromo() {
        this.setState(prevState => ({
            ubahKodePromo: !prevState.ubahKodePromo
            }));
        }

    render() {
        const {Books} = this.state;
        const {Details} = this.state;
        const {Shop} = this.state;
        const {ubahKodePromo, ubahGambar, ubahHarga, ubahKategori} = this.state;

        return (
        <div>
            <section className="isi-details">
                <div className="details-box">
                    <h1>{Books.judul_buku}</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <img src={Books.gambar}/>
                            <button style={{display: (ubahGambar) ? 'none' : 'block' }} onClick={this.UbahGambar}>Ubah Gambar</button>
                            <input onChange={e => this.changeInput(e)} style={{display: !(ubahGambar) ? 'none' : 'block' }} type="text" name="gambar" defaultValue={Books.gambar}/>
                            <button style={{display: !(ubahGambar) ? 'none' : 'block' }} onClick={this.Edit}>Simpan</button>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row">
                                <div className="col-3">
                                    <label for="judul">Toko</label>
                                </div>
                                <div className="col-9">
                                    <span>{Shop.nama_toko}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="judul">Judul</label>
                                </div>
                                <div className="col-9">
                                    <span>{Books.judul_buku}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="harga">Harga</label>
                                </div>
                                <div className="col-4">
                                    <span>Rp {Books.harga},00</span>
                                    <input style={{display: !(ubahHarga) ? 'none' : 'block' }} type="text" name="harga" onChange={e => this.changeInput(e)} defaultValue={Books.harga}/>
                                </div>
                                <div className="col-5">
                                    <button style={{display: (ubahHarga) ? 'none' : 'block' }} onClick={this.UbahHarga}>Ubah Harga</button>
                                    <button style={{display: !(ubahHarga) ? 'none' : 'block' }} onClick={this.Edit}>Simpan</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="kategori">Kategori</label>
                                </div>
                                <div className="col-4">
                                    <span>{Books.kategori}</span>
                                    <input style={{display: !(ubahKategori) ? 'none' : 'block' }} type="text" name="kategori" onChange={e => this.changeInput(e)} defaultValue={Books.kategori}/>
                                </div>
                                <div className="col-5">
                                    <button style={{display: (ubahKategori) ? 'none' : 'block' }} onClick={this.UbahKategori}>Ubah Kategori</button>
                                    <button style={{display: !(ubahKategori) ? 'none' : 'block' }} onClick={this.Edit}>Simpan</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label>Kondisi</label>
                                </div>
                                <div className="col-9">
                                    <span>{Books.kondisi}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="isbn">ISBN</label>
                                </div>
                                <div className="col-9">
                                    <span>{Details.isbn}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="penulis">Penulis</label>
                                </div>
                                <div className="col-9">
                                    <span>{Details.penulis}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="penerbit">Penerbit</label>
                                </div>
                                <div className="col-9">
                                    <span>{Details.penerbit}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="jumlah_halaman">Jumlah Halaman</label>
                                </div>
                                <div className="col-9">
                                    <span>{Details.jumlah_halaman}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="kode_promo">Kode Promo</label>
                                </div>
                                <div className="col-4">
                                    <span>{Books.kode_promo}</span>
                                    <input style={{display: !(ubahKodePromo) ? 'none' : 'block' }} type="text" name="kode_promo" onChange={e => this.changeInput(e)} defaultValue={Books.kode_promo}/>
                                </div>
                                <div className="col-5">
                                    <button style={{display: (ubahKodePromo) ? 'none' : 'block' }} onClick={this.UbahKodePromo}>Ubah Kode Promo</button>
                                    <button style={{display: !(ubahKodePromo) ? 'none' : 'block' }} onClick={this.Edit}>Simpan</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="status">Status</label>
                                </div>
                                <div className="col-4">
                                    <span>{Books.status}</span>
                                </div>
                                <div className="col-5">
                                    <button onClick={this.dijual} style={{display: (Books.status == 'dijual') ? 'none' : 'block' }}>Ubah Status</button>
                                    <button onClick={this.tidakDijual} style={{display: (Books.status == 'tidak dijual') ? 'none' : 'block' }}>Ubah Status</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-2">
                            <label for="sinopsis">Sinopsis</label>
                        </div>
                        <div className="col-md-10">
                            <p>{Details.sinopsis}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default withRouter(BookInfo)

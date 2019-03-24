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
            qty: 1
            };
        }

    componentDidMount = () =>{
        const self = this;
        const id_buku = this.props.location.pathname.slice(10)
        console.log(id_buku)
        axios
        .get('http://0.0.0.0:5000/toko/buku/' + id_buku)
        .then(function(response){
            self.setState({Books: response.data});
            self.setState({Details: response.data.detail})
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

    render() {
        const {Books} = this.state;
        const {Details} = this.state;
        const {Shop} = this.state;

        return (
        <div>
            <section className="isi-details">
                <div className="details-box">
                    <h1>{Books.judul_buku}</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <img src={Books.gambar}/>
                        </div>
                        <div className="col-lg-5 col-md-6">
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
                                <div className="col-9">
                                    <span>Rp {Books.harga},00</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="kategori">Kategori</label>
                                </div>
                                <div className="col-9">
                                    <span>{Books.kategori}</span>
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

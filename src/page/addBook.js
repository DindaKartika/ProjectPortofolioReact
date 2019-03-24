import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"
import NotifAvailable from './../component/notifAvailable.js'

import ShopName from './../component/shopName.js'
import ShopDetail from './../component/shopDetail.js'

class RegisterShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register : "",
            id_buku: 0
          };
        this.postRegist1 = this.postRegist1.bind(this);
        this.postRegist2 = this.postRegist2.bind(this);
    }

    state = {judul:"", harga: "", kategori: "", gambar: "", kode_promo: "", kondisi: "", isbn: "", penulis:"", penerbit:"", jumlah_halaman:"", sinopsis: "", stok:""
    };
    changeInput1 = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    handleChange(event) {
        this.setState({
          kondisi: event.target.value
        });
      }

    postRegist1(){
        const {judul, harga, kategori, gambar, kondisi} = this.state;
        const data={
            "judul_buku" : judul,
            "harga" : harga,
            "kategori":kategori,
            "gambar":gambar,
            "kondisi":kondisi
        };
        console.log('data', data)
        const self = this;
        const tokens = localStorage.getItem('token')
        axios
            .post('http://0.0.0.0:5000/toko/buku', data, {headers:{
                'Authorization' : 'Bearer ' + tokens
            }})
            .then(function(response){
                console.log(response.data);
                self.setState({register: 'success'});
                self.setState({id_buku: response.data.id_buku})
            })
            .catch(function(error){
                console.log(error);
            });
    };

    changeInput2 = e =>{
        this.setState({[e.target.name]: e.target.value});
    };
    postRegist2(){
        const {id_buku, isbn, penulis, penerbit, jumlah_halaman, sinopsis, stok} = this.state;
        const data={
            "id_buku" : id_buku,
            "isbn" : isbn,
            "penulis":penulis,
            "penerbit":penerbit,
            "jumlah_halaman":jumlah_halaman,
            "sinopsis":sinopsis,
            "stok":stok
        };
        const self = this;
        const tokens = localStorage.getItem('token')
        axios
            .post('http://0.0.0.0:5000/toko/buku/detail_buku', data, {headers:{
                'Authorization' : 'Bearer ' + tokens
            }})
            .then(function(response){
                console.log(response.data);
                self.props.history.push('/buku-saya')
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render() {
            return (
                <div>
                    <section class="isi-book-info">
                        <div class="info-box">
                            <h1>Info Buku</h1>
                            <hr/>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="judul">Judul</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="judul" id="judul" onChange={e => this.changeInput1(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="harga">Harga</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="harga" id="harga" onChange={e => this.changeInput1(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="kategori">Kategori</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="kategori" id="kategori" onChange={e => this.changeInput1(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="gambar">Gambar</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="gambar" id="gambar" onChange={e => this.changeInput1(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Kondisi</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="radio" name="kondisi" value="baru" onChange={e => this.handleChange(e)} id="kondisi"/>Baru
                                        <br/>
                                        <input type="radio" name="kondisi" value="bekas" onChange={e => this.handleChange(e)} id="kondisi"/>Bekas
                                        <br/>
                                        <input type="radio" name="kondisi" value="preorder" onChange={e => this.handleChange(e)} id="kondisi"/>Pre Order
                                    </div>
                                </div>
                                <button onClick={() =>this.postRegist1()}>Simpan</button>
                                {(this.state.register == 'success') && <NotifAvailable />}
                            <hr/>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="isbn">ISBN</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="isbn" id="isbn" onChange={e => this.changeInput2(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="penulis">Penulis</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="penulis" id="penulis" onChange={e => this.changeInput2(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="penerbit">Penerbit</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="penerbit" id="penerbit" onChange={e => this.changeInput2(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="jumlah_halaman">Jumlah Halaman</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="jumlah_halaman" id="jumlah_halaman" onChange={e => this.changeInput2(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="sinopsis">Sinopsis</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="sinopsis" id="sinopsis" onChange={e => this.changeInput2(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="stok">Stok</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="stok" id="stok" onChange={e => this.changeInput2(e)} required/>
                                    </div>
                                </div>
                                <button onClick={() =>this.postRegist2()} type="submit">Simpan</button>
                        </div>
                    </section>
                </div>
        );
    }
}

export default RegisterShop;

import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import Resign from './../image/Book/novel/resign.jpg'
import Minus from './../image/icon/minus-blue.png'
import Plus from './../image/icon/plus.png'

import JNE from './../image/logo/jne.png'
import JNT from './../image/logo/j&t.png'
import Pos from './../image/logo/pos.png'
import Wahana from './../image/logo/wahana.png'

class BookDetail extends Component {
    render() {
        return (
        <div>
            <section className="isi-register">
                <div className="register-box">
                    <h1>Register Shop</h1>
                    <hr/>
                    <form action="#">
                        <div className="row">
                            <div className="col-md-3">
                                <label for="nama-toko">Nama Toko</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" name="nama-toko" id="nama-toko" required/>
                            </div>
                        </div>
                        <button type="submit">Cek kesediaan nama</button>
                    </form>
                    <form action="/main-shop">
                        <br/>
                        <h3 style="text-align: center;">Alamat Toko</h3>
                        <div className="row">
                            <div className="col-md-3">
                                <label for="alamat-lengkap">Alamat Lengkap</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" name="alamat-lengkap" id="alamat-lengkap" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label for="kecamatan">Kecamatan</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" name="kecamatan" id="kecamatan" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label for="kota">Kota</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" name="kota" id="kota" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <label for="kode-pos">Kode Pos</label>
                            </div>
                            <div className="col-md-9">
                                <input type="text" name="kode-pos" id="kode-pos" required/>
                            </div>
                        </div>
                        <button type="submit">Daftar</button>
                    </form>
                </div>
            </section>
        </div>
        );
    }
}

export default BookDetail;

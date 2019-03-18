import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import SidebarKategori from '../component/sidebarKategori'

class Kategori extends Component {
    render() {
        return (
        <div>
            <section class="isi-tab-kategori">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2 col-sm-4">
                            <SidebarKategori/>
                        </div>
                        <div class="col-md-10 col-sm-8">
                            <div class="konten-kategori">
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <a href="details.html">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/resign.jpg"/>
                                            <br/>
                                            <span class="judul">Resign!</span>
                                            <br/>
                                            <span class="toko">Toko Ada Apa dengan Dia</span>
                                            <br/>
                                            <span class="harga">Rp 85.000,00</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <a href="details.html">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/perahu_kertas.jpg"/>
                                            <br/>
                                            <span class="judul">Perahu Kertas</span>
                                            <br/>
                                            <span class="toko">Toko Di Sini Ada</span>
                                            <br/>
                                            <span class="harga">Rp 73.000,00</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <a href="details.html">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/spring-in-london.jpg"/>
                                            <br/>
                                            <span class="judul">Spring In London</span>
                                            <br/>
                                            <span class="toko">Toko Di Sini Senang</span>
                                            <br/>
                                            <span class="harga">Rp 120.000,00</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <a href="details.html">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/autumn-in-paris.jpg"/>
                                            <br/>
                                            <span class="judul">Autumn In Paris</span>
                                            <br/>
                                            <span class="toko">Toko Aku Cinta Dia</span>
                                            <br/>
                                            <span class="harga">Rp 77.000,00</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <a href="details.html">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/summer-in-seoul.jpg"/>
                                            <br/>
                                            <span class="judul">Summer In Seoul</span>
                                            <br/>
                                            <span class="toko">Toko Ada Apa dengan Dia</span>
                                            <br/>
                                            <span class="harga">Rp 65.000,00</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <a href="details.html">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/wander-woman.jpg"/>
                                            <br/>
                                            <span class="judul">Wander Woman</span>
                                            <br/>
                                            <span class="toko">Toko Apa Aja Ada</span>
                                            <br/>
                                            <span class="harga">Rp 90.000,00</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <a href="details.html">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/miss-pesimis.jpg"/>
                                            <br/>
                                            <span class="judul">Miss Pesimis</span>
                                            <br/>
                                            <span class="toko">Gramedia Pustaka Utama</span>
                                            <br/>
                                            <span class="harga">Rp 87.000,00</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <Link to="/detail-buku/say-no-to-me">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/say-no-to-me.jpg"/>
                                            <br/>
                                            <span class="judul">Say No To Me</span>
                                            <br/>
                                            <span class="toko">Toko Di Sini Senang</span>
                                            <br/>
                                            <span class="harga">Rp 125.000,00</span>
                                        </div>
                                        </Link>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <Link to="/detail-buku/arkais">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/arkais.jpg"/>
                                            <br/>
                                            <span class="judul">Arkais - Tuan Teh dan Nona Kopi</span>
                                            <br/>
                                            <span class="toko">Toko Mewek</span>
                                            <br/>
                                            <span class="harga">Rp 56.000,00</span>
                                        </div>
                                        </Link>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <Link to="/detail-buku/autumn-in-paris">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/autumn-in-paris.jpg"/>
                                            <br/>
                                            <span class="judul">Autumn In Paris</span>
                                            <br/>
                                            <span class="toko">Toko Apa Aja Ada</span>
                                            <br/>
                                            <span class="harga">Rp 77.000,00</span>
                                        </div>
                                        </Link>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <Link to="/detail-buku/mozachiko">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/mozachiko.jpg"/>
                                            <br/>
                                            <span class="judul">Mozachiko</span>
                                            <br/>
                                            <span class="toko">Toko Sama-Sama</span>
                                            <br/>
                                            <span class="harga">Rp 95.000,00</span>
                                        </div>
                                        </Link>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-sm-6">
                                        <Link to="/detail-buku/miss-pesimis">
                                        <div class="buku-small">
                                            <img src="assets/image/Book/novel/miss-pesimis.jpg"/>
                                            <br/>
                                            <span class="judul">Miss Pesimis</span>
                                            <br/>
                                            <span class="toko">Toko Di Sini Senang</span>
                                            <br/>
                                            <span class="harga">Rp 95.000,00</span>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="page">
                                <span>Page</span>
                                <button href="/kategori/1" class="active">1</button>
                                <button href="/kategori/2">2</button>
                                <button href="/kategori/3">3</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default Kategori;

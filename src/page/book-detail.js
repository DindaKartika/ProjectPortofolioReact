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
            <section className="isi-details">
                <div className="details-box">
                    <h1>Resign!</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <img src={Resign}/>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="row">
                                <div className="col-3">
                                    <label for="judul">Toko</label>
                                </div>
                                <div className="col-9">
                                    <span>Toko Ada Apa dengan Dia</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="judul">Judul</label>
                                </div>
                                <div className="col-9">
                                    <span>Resign!</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="harga">Harga</label>
                                </div>
                                <div className="col-9">
                                    <span>Rp 85.000,00</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="kategori">Kategori</label>
                                </div>
                                <div className="col-9">
                                    <span>Novel, Metropop, Romance, Office</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label>Kondisi</label>
                                </div>
                                <div className="col-9">
                                    <span>Baru</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="isbn">ISBN</label>
                                </div>
                                <div className="col-9">
                                    <span>9786020380711</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="penulis">Penulis</label>
                                </div>
                                <div className="col-9">
                                    <span>Almira Bastari</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="penerbit">Penerbit</label>
                                </div>
                                <div className="col-9">
                                    <span>Gramedia Pustaka Utama</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <label for="jumlah_halaman">Jumlah Halaman</label>
                                </div>
                                <div className="col-9">
                                    <span>288</span>
                                </div>
                            </div>
                            <div className="jumlah">
                                <img src={Minus} className="qty" id="plus" onclick="minusFunction()"/>
                                <input type="text" value="1" id="book-qty"/>
                                <img src={Plus} className="qty" id="minus" onclick="plusFunction()"/>
                            </div>
                            <Link to="/cart"><button>Beli</button></Link>
                        </div>
                        <div className="col-lg-3">
                            <div className="kurir">
                                <h4>Kurir</h4>
                                <div>
                                    <img src={JNE}/>
                                    <br/>
                                    <span>JNE</span>
                                </div>
                                <div>
                                    <img src={JNT}/>
                                    <br/>
                                    <span>J&T</span>
                                </div>
                                <div>
                                    <img src={Pos}/>
                                    <br/>
                                    <span>Pos Indonesia</span>
                                </div>
                                <div>
                                    <img src={Wahana}/>
                                    <br/>
                                    <span>Wahana</span>
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
                            <p>Kompetisi sengit terjadi di sebuah kantor konsultan di Jakarta. Pesertanya adalah para cungpret, alias kacung kampret. Yang mereka incar bukanlah penghargaan pegawai terbaik, jabatan tertinggi, atau bonus terbesar, melainkan memenangkan taruhan untuk segera resign! Cungpret #1: Alranita Pegawai termuda yang tertekan akibat perlakuan sang bos yang semena-mena. Cungpret #2: Carlo Pegawai yang baru menikah dan ingin mencari pekerjaan dengan gaji lebih tinggi. Cungpret #3: Karenina Pegawai senior yang selalu dianggap tidak becus tapi terus-menerus dijejali proyek baru. Cungpret #4: Andre Pegawai senior kesayangan si bos yang berniat resign demi dapat menikmati kehidupan keluarga yang lebih normal dan seimbang. Sang Bos: Tigran Pemimpin genius, misterius, dan arogan, tapi sukses dipercaya untuk memimpin timnya sendiri pada usianya yang masih cukup muda. Resign sebenarnya tidak sulit dilakukan. Namun kalau kamu memiliki bos yang punya radar sangat kuat seperti Tigran, semua usahamu pasti akan terbaca olehnya. Pertanyaannya, siapakah yang akan menang?</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default BookDetail;

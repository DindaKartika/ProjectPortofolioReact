import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class StartShop extends Component {
    render() {
        return (
            <section className="konten-start-shop">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h1><strong>Apakah BukuKu Seller?</strong></h1>
                        <p>BukuKu Seller adalah layanan untuk user dapat menjual buku.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Apa <strong>keuntungan</strong> yang didapat <strong>BukuKu Seller?</strong></h1>
                        <p>BukuKu Seller memiliki 3 keuntungan :</p>
                        <ol>
                            <li>Proses penjualan mudah</li>
                            <li>Market pembeli luas</li>
                            <li>Barang baru maupun bekas? <strong>Bisa!</strong></li>
                        </ol>
                    </div>
                    <div className="col-md-6"></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr/>
                        <h1>Ayo daftar menjadi <strong>BukuKu Seller</strong></h1>
                        <Link to="/daftar-toko"><button>Daftar Sekarang</button></Link>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default StartShop;

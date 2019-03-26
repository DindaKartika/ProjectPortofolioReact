import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';

import Arrow from './../image/icon/arrow-blue.png'


class HomeAdmin extends Component{
    render(){
        return(
            <section className="isi-index-admin">
                <div className="container">
                    <Link to="/admin/member">
                        <div className="content-index-admin">
                            <h2>Member</h2>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/toko">
                        <div className="content-index-admin">
                            <h2>Toko</h2>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/buku">
                        <div className="content-index-admin">
                            <h2>Buku</h2>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/pembayaran">
                        <div className="content-index-admin">
                            <h2>Metode Pembayaran</h2>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/pengiriman">
                        <div className="content-index-admin">
                            <h2>Metode Pengiriman</h2>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/cart">
                        <div className="content-index-admin">
                            <h2>Cart</h2>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/transaksi">
                        <div className="content-index-admin">
                            <h2>Transaksi</h2>
                        </div>
                    </Link>
                </div>
            </section>
        )
    }
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(HomeAdmin))

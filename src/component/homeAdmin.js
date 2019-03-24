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
                            <span>100 Member</span>
                            <br/>
                            <span>25 Penjual</span>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/toko">
                        <div className="content-index-admin">
                            <h2>Toko</h2>
                            <span>25 Toko Active</span>
                            <br/>
                            <span>0 Toko Inactive</span>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/buku">
                        <div className="content-index-admin">
                            <h2>Buku</h2>
                            <span>75 Buku</span>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/metode-pembayaran">
                        <div className="content-index-admin">
                            <h2>Metode Pembayaran</h2>
                            <span>10 Metode Pembayaran Active</span>
                            <br/>
                            <span>1 Metode Pembayaran Disabled</span>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/metode-pengiriman">
                        <div className="content-index-admin">
                            <h2>Metode Pengiriman</h2>
                            <span>6 Metode Pengiriman Active</span>
                            <br/>
                            <span>0 Metode Pengiriman Disabled</span>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/cart">
                        <div className="content-index-admin">
                            <h2>Cart</h2>
                            <span>30 Cart Unfinished</span>
                            <br/>
                            <span>10 Cart Staged</span>
                            <br/>
                            <span>25 Cart Finished</span>
                        </div>
                    </Link>
                </div>
                <div className="container">
                    <Link to="/admin/transaksi">
                        <div className="content-index-admin">
                            <h2>Transaksi</h2>
                            <span>6 Metode Staged</span>
                            <br/>
                            <span>4 Metode Processed</span>
                            <br/>
                            <span>25 Metode Finished</span>
                        </div>
                    </Link>
                </div>
            </section>
        )
    }
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(HomeAdmin))

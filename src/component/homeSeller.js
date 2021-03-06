import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';

import Arrow from './../image/icon/arrow-blue.png';
import Arkais from './../image/Book/novel/arkais.jpg';
import DearNathan from './../image/Book/novel/Dear-Nathan.jpg';
import Mozachiko from './../image/Book/novel/mozachiko.jpg';
import Shea from './../image/Book/novel/shea.jpg';
class HomeSeller extends Component{
    render(){
        return(
            <div className="container-fluid categories">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <h2 className="main-index-styling">My Shop</h2>
                    </div>
                    <div className="col-md-7 d-md-block d-none">
                        <div className="garis"></div>
                    </div>
                    <div className="col-md-2 col-6">
                        <div className="telusuri">
                            <Link to="/info-toko" className="baca-selengkapnya">
                                <span>Info</span>
                                <img className="arrow" src={Arrow}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 isi-details">
                        <Link to="/produk-saya">
                            <div className="details-box">
                                <h4>Produk Saya</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 isi-details">
                        <Link to="/pesanan-saya">
                            <div className="details-box">
                                <h4>Pesanan Masuk</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(HomeSeller))

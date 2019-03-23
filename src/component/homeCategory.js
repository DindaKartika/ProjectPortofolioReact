import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';

import Arrow from './../image/icon/arrow-blue.png'


class HomeCategory extends Component{
    render(){
        return(
            <div className="container-fluid kategori">
                <div className="row">
                    <div className="col-md-2 col-6">
                        <h2>Kategori</h2>
                    </div>
                    <div className="col-md-9 d-md-block d-none">
                        <div className="garis"></div>
                    </div>
                </div>
                <div className="categories">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/novel">
                                <div className="isi-kategori">
                                    <span>Novel</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/misteri">
                                <div className="isi-kategori">
                                    <span>Misteri</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/anak-anak">
                                <div className="isi-kategori">
                                    <span>Anak-Anak</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/bahasa">
                                <div className="isi-kategori">
                                    <span>Bahasa</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/ekonomi">
                                <div className="isi-kategori">
                                    <span>Ekonomi</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/hukum">
                                <div className="isi-kategori">
                                    <span>Hukum</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/biografi">
                                <div className="isi-kategori">
                                    <span>Biografi</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/agama">
                                <div className="isi-kategori">
                                    <span>Agama</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/ebook">
                                <div className="isi-kategori">
                                    <span>Ebook</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/majalah">
                                <div className="isi-kategori">
                                    <span>Majalah</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/politik">
                                <div className="isi-kategori">
                                    <span>Politik</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <Link to="/kategori/sastra">
                                <div className="isi-kategori">
                                    <span>Sastra</span>
                                </div>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(HomeCategory))

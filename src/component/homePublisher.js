import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';

import Arrow from './../image/icon/arrow-blue.png'
import Gramedia from './../image/shop/gramedia.png'
import AePublishing from './../image/shop/ae-publishing.png'
import BentangPustaka from './../image/shop/bentang-pustaka.jpg'
import EdwritePublishing from './../image/shop/edwrite-publishing.png'
import Mizan from './../image/shop/mizan.jpg'
import Erlangga from './../image/shop/200px-Esis.jpg'
import Ellunar from './../image/shop/ellunar-publisher.jpg'
import JejakPublisher from './../image/shop/jejak-publisher.jpeg'
import StilettoBook from './../image/shop/stiletto-book.png'
import OnePeachMedia from './../image/shop/one-peach-media.png'


class HomePublisher extends Component{
    render(){
        return(
            <div className="container-fluid official-publisher">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <h2 className="main-index-styling">Official Publisher</h2>
                    </div>
                    <div className="col-md-6 d-md-block d-none">
                        <div className="garis"></div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="telusuri">
                            <Link to="/penulis" className="baca-selengkapnya">
                                <span>Telusuri lebih banyak</span>
                                <img className="arrow" src={Arrow}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="publisher">
                    <div className="row">
                        <div className="col-md-3 publisher-big">
                            <Link to="/penerbit/gramedia">
                                <img src={Gramedia}/>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-6 publisher-small">
                                    <Link to="/penerbit/ellunar">
                                        <img src={Ellunar}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/publisher/erlangga">
                                        <img src={Erlangga}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/penerbit/jejak-publisher">
                                        <img src={JejakPublisher}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/penerbit/stiletto-book">
                                        <img src={StilettoBook}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-6 publisher-small">
                                    <Link to="/penerbit/one-peach-media">
                                        <img src={OnePeachMedia}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/penerbit/edwrite-publishing">
                                        <img src={EdwritePublishing}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/penerbit/ae-publishing">
                                        <img src={AePublishing}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/penerbit/mizan">
                                        <img src={Mizan}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 publisher-big">
                        <Link to="penerbit/bentang-pustaka">
                            <img src={BentangPustaka}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(HomePublisher))

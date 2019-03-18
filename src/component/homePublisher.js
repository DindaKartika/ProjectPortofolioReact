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
import Esis from './../image/shop/200px-Esis.jpg'
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
                            <Link to="/publisher" className="baca-selengkapnya">
                                <span>Telusuri lebih banyak</span>
                                <img className="arrow" src={Arrow}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="publisher">
                    <div className="row">
                        <div className="col-md-3 col-6 publisher-big">
                            <Link to="/publisher/gramedia">
                                <img src={Gramedia}/>
                            </Link>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="row">
                                <div className="col-6 publisher-small">
                                    <Link to="/publisher/ellunar">
                                        <img src={Ellunar}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/publisher/esis">
                                        <img src={Esis}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/publisher/jejak-publisher">
                                        <img src={JejakPublisher}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/publisher/stiletto-book">
                                        <img src={StilettoBook}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="row">
                                <div className="col-6 publisher-small">
                                    <Link to="/publisher/one-peach-media">
                                        <img src={OnePeachMedia}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/publisher/edwrite-publishing">
                                        <img src={EdwritePublishing}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/publisher/ae-publishing">
                                        <img src={AePublishing}/>
                                    </Link>
                                </div>
                                <div className="col-6 publisher-small">
                                    <Link to="/publisher/mizan">
                                        <img src={Mizan}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 publisher-big">
                        <Link to="publisher/bentang-pustaka">
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

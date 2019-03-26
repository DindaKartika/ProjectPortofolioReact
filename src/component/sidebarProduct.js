import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

const SidebarProduct = props => {
        return (
            <div className="sidebar">
                <span>Kategori</span>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/produk-saya/novel">Novel</Link>
                        <br/>
                        <Link to="/produk-saya/misteri">Misteri</Link>
                        <br/>
                        <Link to="/produk-saya/agama">Agama</Link>
                        <br/>
                        <Link to="/produk-saya/sastra">Sastra</Link>
                        <br/>
                        <Link to="/produk-saya/hukum">Hukum</Link>
                        <br/>
                        <Link to="/produk-saya/ekonomi">Ekonomi</Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/produk-saya/bahasa">Bahasa</Link>
                        <br/>
                        <Link to="/produk-saya/biografi">Biografi</Link>
                        <br/>
                        <Link to="/produk-saya/anak-anak">Anak-anak</Link>
                        <br/>
                        <Link to="/produk-saya/majalah">Majalah</Link>
                        <br/>
                        <Link to="/produk-saya/politik">Politik</Link>
                        <br/>
                        <Link to="/produk-saya/ebook">Ebook</Link>
                    </div>
                </div>
                <br/>
            </div>
        );
}

export default SidebarProduct;

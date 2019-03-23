import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

const SidebarPenerbit = props => {
        return (
            <div className="sidebar">
                <h1>{props.title}</h1>
                <span>Tag Terkait:</span>
                <br/>
                <form action="#">
                    <input type="checkbox" name="tag" value="metropop"/>Metropop<br/>
                    <input type="checkbox" name="tag" value="fan-fiction"/>Fan Fiction<br/>
                    <input type="checkbox" name="tag" value="romance"/>Romance<br/>
                    <input type="checkbox" name="tag" value="metropop"/>Religi<br/>
                    <button type="submit">Apply</button>
                </form>
                <hr/>
                <span>Kategori</span>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/kategori/novel">Novel</Link>
                        <br/>
                        <Link to="/kategori/misteri">Misteri</Link>
                        <br/>
                        <Link to="/kategori/agama">Agama</Link>
                        <br/>
                        <Link to="/kategori/sastra">Sastra</Link>
                        <br/>
                        <Link to="/kategori/hukum">Hukum</Link>
                        <br/>
                        <Link to="/kategori/ekonomi">Ekonomi</Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/kategori/bahasa">Bahasa</Link>
                        <br/>
                        <Link to="/kategori/biografi">Biografi</Link>
                        <br/>
                        <Link to="/kategori/anak-anak">Anak-anak</Link>
                        <br/>
                        <Link to="/kategori/majalah">Majalah</Link>
                        <br/>
                        <Link to="/kategori/politik">Politik</Link>
                        <br/>
                        <Link to="/kategori/ebook">Ebook</Link>
                    </div>
                </div>
                <br/>
            </div>
        );
}

SidebarPenerbit.propTypes = {
    title : PropTypes.string.isRequired
}

export default SidebarPenerbit;

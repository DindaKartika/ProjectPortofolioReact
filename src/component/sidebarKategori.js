import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class SidebarKategori extends Component {
    render() {
        return (
            <div className="sidebar">
                <h1>Novel</h1>
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
                        <Link to="/kategori/misteri">Misteri</Link>
                        <Link to="/kategori/agama">Agama</Link>
                        <Link to="/kategori/sastra">Sastra</Link>
                        <Link to="/kategori/hukum">Hukum</Link>
                        <Link to="/kategori/ekonomi">Ekonomi</Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/kategori/bahasa">Bahasa</Link>
                        <Link to="/kategori/biografi">Biografi</Link>
                        <Link to="/kategori/anak-anak">Anak-anak</Link>
                        <Link to="/kategori/majalah">Majalah</Link>
                        <Link to="/kategori/politik">Politik</Link>
                        <Link to="/kategori/ebook">Ebook</Link>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default SidebarKategori;

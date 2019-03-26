import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

const SidebarAdmin = props => {
        return (
            <div class="sidebar-admin">
                <h1>{props.tab}</h1>
                <span>Lainnya</span>
                <br/>
                <Link to="/admin/member">Member</Link>
                <br/>
                <Link to="/admin/toko">Toko</Link>
                <br/>
                <Link to="/admin/buku">Buku</Link>
                <br/>
                <Link to="/admin/pembayaran">Metode Pembayaran</Link>
                <br/>
                <Link to="/admin/pengiriman">Metode Pengiriman</Link>
                <br/>
                <Link to="/admin/cart">Cart</Link>
                <br/>
                <Link to="/admin/transaksi">Transaksi</Link>
                <br/>
            </div>
        );
}

SidebarAdmin.propTypes = {
    tab : PropTypes.string.isRequired
}

export default SidebarAdmin;

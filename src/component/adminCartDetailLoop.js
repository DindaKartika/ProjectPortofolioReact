import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListTransaksi = props => {
    return(
        <div class="">
            <hr/>
            <div class="row">
                <div class="col-md-2">
                    <label>Buku</label>
                </div>
                <div class="col-md-10">
                    <span>{props.buku.judul_buku}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <label>Jumlah</label>
                </div>
                <div class="col-md-10">
                    <span>{props.jumlah}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <label>Total Harga</label>
                </div>
                <div class="col-md-10">
                    <span>Rp {props.total_harga},00</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <label>Toko</label>
                </div>
                <div class="col-md-10">
                    <span>{props.toko.nama_toko}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <label>Metode Pengiriman</label>
                </div>
                <div class="col-md-10">
                    <span>{props.metode_pengiriman.metode}</span>&nbsp;
                    <span>{props.metode_pengiriman.instansi}</span>
                </div>
            </div>
        </div>
    )
}

ListTransaksi.propTypes = {
    buku: PropTypes.string.isRequired,
    jumlah : PropTypes.string.isRequired,
    total_harga : PropTypes.string.isRequired,
    toko : PropTypes.string.isRequired,
    metode_pengiriman : PropTypes.string
}

export default ListTransaksi
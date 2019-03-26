import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


const LoopPenjualan = props => {
    return(
        <div>
            <div className="details-box">
                <div className="row">
                    <div className="col-md-4"><label>judul buku</label></div>
                    <div className="col-md-8"><label>{props.buku.judul_buku}</label></div>
                </div>
                <div className="row">
                    <div className="col-md-4"><label>jumlah</label></div>
                    <div className="col-md-8"><label>{props.jumlah}</label></div>
                </div>
                <div className="row">
                    <div className="col-md-4"><label>nomor resi</label></div>
                    <div className="col-md-5"><label>{props.nomor_resi}</label></div>
                </div>
                <div className="row">
                    <div className="col-md-4"><label>pembeli</label></div>
                    <div className="col-md-8"><label>{props.pembeli.username}</label></div>
                </div>
                <Link to={"/order-detail/" + props.id}><button>Detail</button></Link>
            </div>
        </div>
    )
}

LoopPenjualan.propTypes = {
    id: PropTypes.number,
    buku: PropTypes.number,
    jumlah : PropTypes.string.isRequired,
    nomor_resi : PropTypes.string.isRequired,
    pembeli : PropTypes.number
}

export default LoopPenjualan
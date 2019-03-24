import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListBuy = props => {
    return(
        <div>
            <hr/>
            <div className="row">
                <div className="col-md-4">
                    <label>Judul</label>
                </div>
                <div className="col-md-8">
                    <label>{props.judul}</label>
                </div>
                <div className="col-md-4">
                    <label>Harga</label>
                </div>
                <div className="col-md-8">
                    <label>Rp {props.harga},00</label>
                </div>
                <div className="col-md-4">
                    <label>Toko</label>
                </div>
                <div className="col-md-8">
                    <label>{props.toko}</label>
                </div>
                <div className="col-md-4">
                    <label>Jumlah</label>
                </div>
                <div className="col-md-8">
                    <label>{props.jumlah}</label>
                </div>
                <div className="col-md-4">
                    <label>Metode Pengiriman</label>
                </div>
                <div className="col-md-8">
                    <label>{props.metode_pengiriman}</label>
                </div>
            </div>
            <Link to={"/delete-book/" + props.id}><button>Remove</button></Link>
        </div>
    )
}

ListBuy.propTypes = {
    id : PropTypes.number,
    judul : PropTypes.string.isRequired,
    toko : PropTypes.number,
    harga : PropTypes.number,
    jumlah : PropTypes.number,
    metode_pengiriman : PropTypes.number
}

export default ListBuy
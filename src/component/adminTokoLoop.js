import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListToko = props => {
    return(
        <div class="konten-admin">
        <Link to={"/admin/detail-toko/" + props.id}>
        <div class="detail-admin">
            
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Nama Toko</span>
                    </div>
                    <div class="col-md-9">
                        <span>{props.nama_toko}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Pemilik</span>
                    </div>
                    <div class="col-md-9">
                        <span>{props.pemilik.username}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Rating Toko</span>
                    </div>
                    <div class="col-md-9">
                        <span>{props.rating}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Metode Pengiriman</span>
                    </div>
                    <div class="col-md-9">
                        <span>{props.metode_pengiriman.kurir}</span>&nbsp;
                        <span>{props.metode_pengiriman.metode}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Status</span>
                    </div>
                    <div class="col-md-9">
                        <span>{props.status}</span>
                    </div>
                </div>
            
        </div>
        </Link>
    </div>
    )
}

ListToko.propTypes = {
    id: PropTypes.number,
    nama_toko : PropTypes.string.isRequired,
    pemilik : PropTypes.string.isRequired,
    rating : PropTypes.number,
    metode_pengiriman : PropTypes.number,
    status : PropTypes.number
}

export default ListToko
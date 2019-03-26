import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListTransaksi = props => {
    return(
        <div class="konten-admin">
        <Link to={"/admin/detail-transaksi/" + props.id}>
            <div class="detail-admin">
                
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>ID Cart</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.id_cart}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Metode Pembayaran</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.pembayaran.metode_pembayaran}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Instansi</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.pembayaran.instansi}</span>
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

ListTransaksi.propTypes = {
    id: PropTypes.number,
    id_cart : PropTypes.string.isRequired,
    pembayaran : PropTypes.string.isRequired,
    status : PropTypes.string
}

export default ListTransaksi
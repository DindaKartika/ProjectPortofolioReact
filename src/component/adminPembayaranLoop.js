import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListPembayaran = props => {
    return(
        <div class="konten-admin">
        <Link to={"/admin/detail-metode-pembayaran/" + props.id}>
            <div class="detail-admin">
                
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Metode Pembayaran</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.metode_pembayaran}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Instansi</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.instansi}</span>
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

ListPembayaran.propTypes = {
    id: PropTypes.number,
    metode_pembayaran : PropTypes.string.isRequired,
    instansi : PropTypes.string.isRequired,
    status : PropTypes.string
}

export default ListPembayaran
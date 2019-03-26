import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListCart = props => {
    return(
        <div class="konten-admin">
        <Link to={"/admin/detail-cart/" + props.id}>
            <div class="detail-admin">
                
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Pembeli</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.pembeli.username}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Total Barang</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.total_barang}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Total Pembayaran</span>
                        </div>
                        <div class="col-md-9">
                            <span>Rp {props.total_pembayaran},00</span>
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

ListCart.propTypes = {
    id: PropTypes.number,
    pembeli : PropTypes.string.isRequired,
    total_barang : PropTypes.number,
    total_pembayaran : PropTypes.number,
    status : PropTypes.string
}

export default ListCart
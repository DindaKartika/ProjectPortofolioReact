import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListBook = props => {
    return(
        <div class="konten-admin">
        <Link to={"/admin/detail-buku/" + props.id}>
        <div class="detail-admin">
            
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Nama Toko</span>
                    </div>
                    <div class="col-md-9">
                        <span>{props.toko.nama_toko}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Judul</span>
                    </div>
                    <div class="col-md-9">
                        <span>{props.judul}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Harga</span>
                    </div>
                    <div class="col-md-9">
                        <span>Rp {props.harga},00</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Kategori</span>
                    </div>
                    <div class="col-md-9">
                        <span>{props.kategori}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 d-md-block d-none">
                        <span>Kode Promo</span>
                    </div>
                    <div class="col-md-9">
                        <span>{props.kode_promo}</span>
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

ListBook.propTypes = {
    id: PropTypes.number,
    toko : PropTypes.string.isRequired,
    judul : PropTypes.string.isRequired,
    harga : PropTypes.number,
    kategori : PropTypes.string,
    kode_promo: PropTypes.string,
    status : PropTypes.string
}

export default ListBook
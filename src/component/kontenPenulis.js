import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListBook = props => {
    return(
        <div className="col-lg-3 col-md-4 col-sm-6">
            <Link to={"/detail-buku/"+props.id}>
            <div className="buku-small">
                <img src={props.buku.gambar}/>
                <br/>
                <span className="judul">{props.buku.judul}</span>
                <br/>
                <span className="toko">{props.toko.nama_toko}</span>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <span className="kondisi">{props.buku.kondisi}</span>
                    </div>
                    <div className="col-md-6">
                        <span className="harga">Rp {props.buku.harga},00</span>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

ListBook.propTypes = {
    id: PropTypes.number,
    buku : PropTypes.string.isRequired,
    toko : PropTypes.string
}

export default ListBook
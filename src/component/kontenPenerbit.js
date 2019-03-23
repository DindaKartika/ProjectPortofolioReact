import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListBook = props => {
    return(
        <div className="col-lg-3 col-md-4 col-sm-6">
            {/* <Link to="/detail/"*{props.judul}> */}
            <div className="buku-small">
                <img src={props.image}/>
                <br/>
                <span className="judul">{props.judul}</span>
                <br/>
                <span className="toko">{props.toko}</span>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <span className="kondisi">{props.kondisi}</span>
                    </div>
                    <div className="col-md-6">
                        <span className="harga">Rp {props.harga},00</span>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}

ListBook.propTypes = {
    image : PropTypes.string.isRequired,
    judul : PropTypes.string.isRequired,
    toko : PropTypes.number,
    harga : PropTypes.number,
    kondisi : PropTypes.string
}

export default ListBook
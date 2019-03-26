import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListPengiriman = props => {
    return(
        <div class="konten-admin">
        <Link to={"/admin/detail-metode-pengiriman/" + props.id}>
            <div class="detail-admin">
                
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Metode Pengiriman</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.metode}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Instansi</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.kurir}</span>
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

ListPengiriman.propTypes = {
    id: PropTypes.number,
    metode : PropTypes.string.isRequired,
    kurir : PropTypes.string.isRequired,
    status : PropTypes.string
}

export default ListPengiriman
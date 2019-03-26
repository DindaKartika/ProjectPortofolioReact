import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";


const ListMember = props => {
    return(
        <div class="konten-admin">
        <Link to={"/admin/detail-member/" + props.id}>
            <div class="detail-admin">
                
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Nama Depan</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.nama_depan}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Nama Belakang</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.nama_belakang}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Username</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.username}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 d-md-block d-none">
                            <span>Email</span>
                        </div>
                        <div class="col-md-9">
                            <span>{props.email}</span>
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

ListMember.propTypes = {
    id:PropTypes.number,
    nama_depan: PropTypes.string.isRequired,
    nama_belakang : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    status : PropTypes.string.isRequired
}

export default ListMember
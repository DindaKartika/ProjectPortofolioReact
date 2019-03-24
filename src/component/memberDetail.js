import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import Resign from './../image/Book/novel/resign.jpg'
import Minus from './../image/icon/minus-blue.png'
import Plus from './../image/icon/plus.png'

import JNE from './../image/logo/jne.png'
import JNT from './../image/logo/j&t.png'
import Pos from './../image/logo/pos.png'
import Wahana from './../image/logo/wahana.png'
import AddDetailMember from "./addMemberDetail";

class ViewDetailMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailMember: {}
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        const tokens = localStorage.getItem('token')
        const self = this;
        axios
            .get('http://0.0.0.0:5000/detail_member/me', {
                headers:{
                'Authorization' : 'Bearer ' + tokens
            }})
            .then(function(response){
                console.log('detailmember', response.data);
                self.setState({detailMember: response.data})
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render() {
        const {detailMember} = this.state;
        console.log(detailMember)

        // if (detailMember != {}){
            return (
                <div>
                    <h4 style={{textAlign: 'center'}}>Alamat Pengiriman</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <label for="alamat-lengkap">Nama Penerima</label>
                        </div>
                        <div className="col-md-9">
                            <label>{detailMember.nama}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label for="alamat-lengkap">Telepon</label>
                        </div>
                        <div className="col-md-9">
                            <label>{detailMember.telepon}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label for="alamat-lengkap">Alamat Lengkap</label>
                        </div>
                        <div className="col-md-9">
                            <label>{detailMember.alamat_lengkap}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label for="kecamatan">Kecamatan</label>
                        </div>
                        <div className="col-md-9">
                            <label>{detailMember.kecamatan}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label for="kota">Kota</label>
                        </div>
                        <div className="col-md-9">
                            <label>{detailMember.kota}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label for="kode-pos">Kode Pos</label>
                        </div>
                        <div className="col-md-9">
                            <label>{detailMember.kodepos}</label>
                        </div>
                    </div>
                </div>
            );
        // }
        // else{
        //     return (
        //         <AddDetailMember/>
        //     );
        // }
    }
}

export default ViewDetailMember;

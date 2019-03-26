import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"
import NotifAvailable from './../component/notifAvailable.js'

class AddPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register : "",
            id_buku: 0
          };
        this.postRegist = this.postRegist.bind(this);
    }

    state = {metode_pengiriman:"", kurir: ""};

    handleChange(event) {
        this.setState({
          kondisi: event.target.value
        });
      }

    changeInput = e =>{
        this.setState({[e.target.name]: e.target.value});
    };
    postRegist(){
        const {metode_pengiriman, kurir} = this.state;
        const data={
            "metode" : metode_pengiriman,
            "kurir" : kurir
        };
        const self = this;
        const tokens = localStorage.getItem('token')
        axios
            .post('https://bukuku.site/admin/metode_pengiriman', data, {headers:{
                'Authorization' : 'Bearer ' + tokens
            }})
            .then(function(response){
                console.log(response.data);
                self.props.history.push('/admin/pengiriman')
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render() {
            return (
                <div>
                    <section class="isi-book-info">
                        <div class="info-box">
                            <h1>Tambah Metode pengiriman</h1>
                            <hr/>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="judul">Metode pengiriman</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="metode_pengiriman" id="judul" onChange={e => this.changeInput(e)} required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label for="harga">Kurir</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" name="kurir" id="harga" onChange={e => this.changeInput(e)} required/>
                                    </div>
                                </div>
                                <button onClick={() =>this.postRegist()} type="submit">Simpan</button>
                        </div>
                    </section>
                </div>
        );
    }
}

export default AddPayment;

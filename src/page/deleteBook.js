import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import Minus from './../image/icon/minus-blue.png'
import Plus from './../image/icon/plus.png'

import JNE from './../image/logo/jne.png'
import JNT from './../image/logo/j&t.png'
import Pos from './../image/logo/pos.png'
import Wahana from './../image/logo/wahana.png'

class DeleteBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            Books: {},
            Details: {},
            Shop: {},
            method:{},
            qty: 1
            };
        this.deltransaction=this.deltransaction.bind(this)
        }

        deltransaction(){
        const self = this;
        const id_buku = this.props.location.pathname.slice(13)
        const tokens = localStorage.getItem('token')
        console.log(id_buku)
        axios
        .delete('http://0.0.0.0:5000/pembelian/me/' + id_buku, {
            headers:{
                'Authorization' : 'Bearer ' + tokens
            }
        })
        .then(function(response){
            console.log(response.data);
            self.props.history.push('/cart')
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render() {
        const {Books} = this.state;
        const {Details} = this.state;
        const {Shop} = this.state;

        return (
        <div>
            <section className="isi-details">
                <div className="details-box">
                    <h5>Yakin menghapus pembelian ini?</h5>
                    <button onClick={this.deltransaction}>Hapus</button>
                    <Link to="/cart"><button>Kembali</button></Link>
                </div>
            </section>
        </div>
        );
    }
}

export default withRouter(DeleteBook)

import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import ShopName from './../component/shopName.js'
import ShopDetail from './../component/shopDetail.js'

class RegisterShop extends Component {
    render() {
        const toko = JSON.parse(localStorage.getItem('toko'))
        if (toko === true){
            return(
                <div className="register-box">
                <h2>Anda telah mendaftar toko</h2>
                <Link to="/produk-saya"><button>Lanjutkan ke halaman toko</button></Link>
            </div>
            )
        }
        else{
            return (
                <div>
                    <section className="isi-register">
                        <div className="register-box">
                            <h1>Register Shop</h1>
                            <hr/>
                            <ShopName/>
                            <ShopDetail/>
                        </div>
                    </section>
                </div>
        );
        }
    }
}

export default RegisterShop;

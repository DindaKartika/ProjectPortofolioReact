import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';

import Exit from './../image/icon/exit.png'


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render(){
        if(!this.props.is_login){
            return(
                    <div className="container-fluid">
                        <div className="header-atas d-md-block d-none">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-5"></div>
                                <div className="col-md-5">
                                    <ul className="nav">
                                        <li className="nav-item nav-atas"><a href="promosi.html" className="nav-link">Promo</a></li>
                                        <li className="nav-item nav-atas"><a href="start-shop.html" className="nav-link">Mulai Berjualan</a></li>
                                        <li className="nav-item nav-atas"><a href="help.html" className="nav-link">Pusat Bantuan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-bawah">
                            <div className="row">
                                <div className="col-md-2 col-sm-6">
                                    <h1><a href="index.html">BukuKu</a></h1>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <form action="search.html">
                                        <input type="text" name="search" placeholder="search"/>
                                    </form>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-4">
                                    <ul className="nav">
                                        <li className="nav-item nav-bawah"><button onclick="open_explore()" id="btn-explore">Explore</button></li>
                                        <li className="nav-item nav-bawah"><a href="cart.html" className="nav-link">Cart</a></li>
                                        <li className="nav-item nav-bawah"><button onClick={this.toggle}>Log In</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-hidden" id="isi-explore-big">
                            <div className="row">
                                <div className="col-md-4 d-md-block d-none">
                                <h1>Kategori</h1>
                                <div className="row isi-header-hidden">
                                    <div className="col-md-4 col-sm-6">
                                        <span><a href="kategori.html">Novel</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Biografi</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Misteri</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Agama</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Anak-Anak</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Ekonomi</a></span>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <span><a href="kategori.html">Ebook</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Politik</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Bahasa</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Majalah</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Hukum</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Sastra</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-md-block d-none">
                                <h1>Penulis</h1>
                                <div className="row isi-header-hidden">
                                    <div className="col-md-4 col-sm-6">
                                        <span><a href="kategori.html">AleaZalea</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Ilana Tan</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Dahlan Iskan</a></span>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <span><a href="kategori.html">Wulan Fadi</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Dee Lestari</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Crowdstoria</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-md-block d-none">
                                <h1>Penerbit</h1>
                                <div className="row isi-header-hidden">
                                    <div className="col-md-4 col-sm-6">
                                        <span><a href="kategori.html">Gramedia Pustaka Utama</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Bentang Pustaka</a></span>
                                        <br/>
                                        <span><a href="kategori.html">AE Publisher</a></span>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <span><a href="kategori.html">Mizan</a></span>
                                        <br/>
                                        <span><a href="kategori.html">EdWrite Publisher</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-md-none d-block">
                                <button onclick="open_kategori()">Kategori</button>
                            </div>
                            <div className="col-4 d-md-none d-block">
                                <button onclick="open_penulis()">Penulis</button>
                            </div>
                            <div className="col-4 d-md-none d-block">
                                <button onclick="open_penerbit()">Penerbit</button>
                            </div>
                            <div className="col-12 isi-explore" id="isi-kategori">
                                <div className="row">
                                    <div className="col-6">
                                        <span><a href="kategori.html">Novel</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Biografi</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Misteri</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Agama</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Anak-Anak</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Ekonomi</a></span>
                                    </div>
                                    <div className="col-6">
                                        <span><a href="kategori.html">Ebook</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Politik</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Bahasa</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Majalah</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Hukum</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Sastra</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 isi-explore" id="isi-penulis">
                                <div className="row">
                                    <div className="col-6">
                                        <span><a href="kategori.html">AleaZalea</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Ilana Tan</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Dahlan Iskan</a></span>
                                    </div>
                                    <div className="col-6">
                                        <span><a href="kategori.html">Wulan Fadi</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Dee Lestari</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Crowdstoria</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 isi-explore" id="isi-penerbit">
                                <div className="row">
                                    <div className="col-6">
                                        <span><a href="kategori.html">Gramedia Pustaka Utama</a></span>
                                        <br/>
                                        <span><a href="kategori.html">Bentang Pustaka</a></span>
                                        <br/>
                                        <span><a href="kategori.html">AE Publisher</a></span>
                                    </div>
                                    <div className="col-6">
                                        <span><a href="kategori.html">Mizan</a></span>
                                        <br/>
                                        <span><a href="kategori.html">EdWrite Publisher</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        Log In
                    </ModalHeader>
                    <ModalBody>
                    <form>
                            <label for="username">Username</label>
                            <br/>
                            <input type="text" name="username" required/>
                            <br/>
                            <label for="password">Password</label>
                            <br/>
                            <input type="password" name="password" required/>
                            <br/>
                            <span><a href="lupa-pass.html">Lupa Password?</a></span>
                            <br/>
                            <button type="submit">Masuk</button>
                            </form>
                            <span>Belum Punya Akun?</span>
                            <a href="signup.html"><button>Daftar</button></a>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                        {/* <div className="modal-content">
                            <div className="exit">
                                <img onclick={this.close_login} src={Exit}/>
                            </div>
                            <h1>Log In</h1>
                            <hr/>
                            <form>
                            <label for="username">Username</label>
                            <br/>
                            <input type="text" name="username" required/>
                            <br/>
                            <label for="password">Password</label>
                            <br/>
                            <input type="password" name="password" required/>
                            <br/>
                            <span><a href="lupa-pass.html">Lupa Password?</a></span>
                            <br/>
                            <button type="submit">Masuk</button>
                            </form>
                            <span>Belum Punya Akun?</span>
                            <a href="signup.html"><button>Daftar</button></a>
                        </div> */}
                    </Modal>
                </div>
            )
        }
        else{
            return(
                <div className="header">
                    <div className="container-fluid">
                        <div className="header-atas d-md-block d-none">
                            <div className="row">
                                <div className="col-md-2"><label>{this.props.username}</label></div>
                                <div className="col-md-5"></div>
                                <div className="col-md-5">
                                    <ul className="nav">
                                        <li className="nav-item nav-atas"><a href="promosi.html" className="nav-link">Promo</a></li>
                                        <li className="nav-item nav-atas"><a href="start-shop.html" className="nav-link">Mulai Berjualan</a></li>
                                        <li className="nav-item nav-atas"><a href="help.html" className="nav-link">Pusat Bantuan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-bawah">
                            <div className="row">
                                <div className="col-md-2 col-sm-6">
                                    <h1><a href="index.html">BukuKu</a></h1>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <form action="search.html">
                                        <input type="text" name="search" placeholder="search"/>
                                    </form>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-4">
                                    <ul className="nav">
                                        <li className="nav-item nav-bawah"><button onclick="open_explore()" id="btn-explore" style={{display: !(this.props.status == 'admin') ? 'block' : 'none' }}>Explore</button></li>
                                        <li className="nav-item nav-bawah"><a href="cart.html" className="nav-link" style={{display: !(this.props.status == 'admin') ? 'block' : 'none' }}>Cart</a></li>
                                        <li className="nav-item nav-bawah"><Link to="/" onClick={() =>this.props.postSignOut()}>LOG OUT</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-hidden" id="isi-explore-big">
                        <div className="row">
                            <div className="col-md-4 d-md-block d-none">
                                <h1>Kategori</h1>
                            <div className="row isi-header-hidden">
                                <div className="col-md-4 col-sm-6">
                                    <span><a href="kategori.html">Novel</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Biografi</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Misteri</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Agama</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Anak-Anak</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Ekonomi</a></span>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <span><a href="kategori.html">Ebook</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Politik</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Bahasa</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Majalah</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Hukum</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Sastra</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-md-block d-none">
                            <h1>Penulis</h1>
                            <div className="row isi-header-hidden">
                                <div className="col-md-4 col-sm-6">
                                    <span><a href="kategori.html">AleaZalea</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Ilana Tan</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Dahlan Iskan</a></span>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <span><a href="kategori.html">Wulan Fadi</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Dee Lestari</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Crowdstoria</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-md-block d-none">
                        <h1>Penerbit</h1>
                            <div className="row isi-header-hidden">
                                <div className="col-md-4 col-sm-6">
                                    <span><a href="kategori.html">Gramedia Pustaka Utama</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Bentang Pustaka</a></span>
                                    <br/>
                                    <span><a href="kategori.html">AE Publisher</a></span>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <span><a href="kategori.html">Mizan</a></span>
                                    <br/>
                                    <span><a href="kategori.html">EdWrite Publisher</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-md-none d-block">
                            <button onclick="open_kategori()">Kategori</button>
                        </div>
                        <div className="col-4 d-md-none d-block">
                            <button onclick="open_penulis()">Penulis</button>
                        </div>
                        <div className="col-4 d-md-none d-block">
                            <button onclick="open_penerbit()">Penerbit</button>
                        </div>
                        <div className="col-12 isi-explore" id="isi-kategori">
                            <div className="row">
                                <div className="col-6">
                                    <span><a href="kategori.html">Novel</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Biografi</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Misteri</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Agama</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Anak-Anak</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Ekonomi</a></span>
                                </div>
                                <div className="col-6">
                                    <span><a href="kategori.html">Ebook</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Politik</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Bahasa</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Majalah</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Hukum</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Sastra</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 isi-explore" id="isi-penulis">
                            <div className="row">
                                <div className="col-6">
                                    <span><a href="kategori.html">AleaZalea</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Ilana Tan</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Dahlan Iskan</a></span>
                                </div>
                                <div className="col-6">
                                    <span><a href="kategori.html">Wulan Fadi</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Dee Lestari</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Crowdstoria</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 isi-explore" id="isi-penerbit">
                            <div className="row">
                                <div className="col-6">
                                    <span><a href="kategori.html">Gramedia Pustaka Utama</a></span>
                                    <br/>
                                    <span><a href="kategori.html">Bentang Pustaka</a></span>
                                    <br/>
                                    <span><a href="kategori.html">AE Publisher</a></span>
                                </div>
                                <div className="col-6">
                                    <span><a href="kategori.html">Mizan</a></span>
                                    <br/>
                                    <span><a href="kategori.html">EdWrite Publisher</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            )
        }
    }
}

export default connect("api_key, email, password, full_name, username, is_login, status", actions)(withRouter(Header))

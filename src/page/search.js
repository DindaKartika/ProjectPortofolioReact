import React, { Component } from "react";
import { Link } from 'react-router-dom';

import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import FilterSearch from "./../component/FilterSearch.js"

class Kategori extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filter: false
        };
    
        this.openFilter = this.openFilter.bind(this);
      }

      openFilter() {
        this.setState(prevState => ({
            filter: !prevState.filter
          }));
        }

    render() {
        return (
        <div>
            <section class="isi-tab-kategori">
                <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-2 col-md-4">
                    <div class="sidebar">
                        <div className="row">
                            <div className="col-lg-12 col-6"><h5>{this.props.location.search.slice(8)}</h5></div>
                            <div className="col-6 d-sm-block d-md-none"><label onClick={this.openFilter} className="filter">Filter</label></div>
                        </div>
                        <div className="d-md-block d-none">
                            <span>Urutkan berdasarkan:</span>
                            <br/>
                            <form action="#">
                            <input type="radio" name="sort" value="highest"/>Harga tertinggi<br/>
                            <input type="radio" name="sort" value="lowest"/>Harga terendah<br/>
                            <button type="submit">Apply</button>
                            </form>
                            <hr/>
                            <span>Tampilkan hanya:</span>
                            <br/>
                            <form action="#">
                            <input type="radio" name="filter" value="new"/>Buku baru<br/>
                            <input type="radio" name="filter" value="pre-order"/>Buku pre order<br/>
                            <button type="submit">Apply</button>
                            </form>
                        </div>
                        {this.state.filter && <FilterSearch />}
                    </div>
                    </div>
                    <div class="col-lg-10 col-md-8">
                    <div class="konten-kategori">
                        <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <Link to="/detail-buku/arkais">
                            <div class="buku-small">
                                <img src="assets/image/Book/novel/resign.jpg"/>
                                <br/>
                                <span class="judul">Resign!</span>
                                <br/>
                                <span class="toko">Toko Ada Apa dengan Dia</span>
                                <br/>
                                <span class="harga">Rp 85.000,00</span>
                            </div>
                            </Link>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <Link to="/detail-buku/perahu kertas">
                            <div class="buku-small">
                                <img src="assets/image/Book/novel/perahu_kertas.jpg"/>
                                <br/>
                                <span class="judul">Perahu Kertas</span>
                                <br/>
                                <span class="toko">Toko Di Sini Ada</span>
                                <br/>
                                <span class="harga">Rp 73.000,00</span>
                            </div>
                            </Link>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <Link to="/detail-buku/spring in london">
                            <div class="buku-small">
                                <img src="assets/image/Book/novel/spring-in-london.jpg"/>
                                <br/>
                                <span class="judul">Spring In London</span>
                                <br/>
                                <span class="toko">Toko Di Sini Senang</span>
                                <br/>
                                <span class="harga">Rp 120.000,00</span>
                            </div>
                            </Link>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <Link to="/detail/autumn in paris">
                            <div class="buku-small">
                                <img src="assets/image/Book/novel/autumn-in-paris.jpg"/>
                                <br/>
                                <span class="judul">Autumn In Paris</span>
                                <br/>
                                <span class="toko">Toko Aku Cinta Dia</span>
                                <br/>
                                <span class="harga">Rp 77.000,00</span>
                            </div>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="pages">
                        <div className="page">
                            <span>Page</span>
                            <PaginationComponent
                            totalItems={50}
                            pageSize={3}
                            onSelect={this.handleSelected}
                            maxPaginationNumbers={5}
                            />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
        );
    }
}

export default Kategori;

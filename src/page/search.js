import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import queryString from 'query-string';

import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import FilterSearch from "./../component/FilterSearch.js"
import ListBook from '../component/kontenSearch'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filter: false,
          Books: [],
        selectedPage: 1
        };
    
        this.openFilter = this.openFilter.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
      }

        componentDidMount = (selectedPage) =>{
            const self = this;
            const category = this.props.location.pathname.slice(9)

            let url = this.props.location.search;
            let params = queryString.parse(url);
            console.log(params);
            axios
            .get('https://bukuku.site/buku', {
                params:{
                    'judul_buku': params.search,
                    'p' : selectedPage
                }
            })
            .then(function(response){
                self.setState({Books: response.data});
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
        }

        handleSelected(selectedPage) {
            console.log("selected", selectedPage);
            this.setState({ selectedPage: selectedPage });
          }

      openFilter() {
        this.setState(prevState => ({
            filter: !prevState.filter
          }));
        }

    render() {
        const {Books} = this.state;
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
                        {Books.map((item, key) => {
                            return <ListBook key ={key} id={item.id_buku} judul={item.judul_buku} image={item.gambar} toko={item.shop} harga={item.harga} kondisi={item.kondisi}/>;
                        })}
                        </div>
                    </div>
                    <div className="pages">
                        <div className="page">
                            <span>Page</span>
                            <PaginationComponent
                            totalItems={Books.length}
                            pageSize={10}
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

export default Search;

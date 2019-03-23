import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import SidebarKategori from '../component/sidebarKategori'
import ListBook from '../component/kontenPenerbit'

const base_url = 'http://0.0.0.0:5000/buku?kategori=';


class Penerbits extends Component {
    constructor(props){
        super(props);
        this.state = {
            Books: [],
            selectedPage: 1
            };
            this.handleSelected = this.handleSelected.bind(this);
        }

        componentDidMount = (selectedPage) =>{
            const self = this;
            const publisher = this.props.location.pathname.slice(10)
            console.log(publisher)
            axios
            .get('http://0.0.0.0:5000/toko/buku/detail_buku', {
                params:{
                    'penerbit': publisher,
                    'p' : selectedPage
                }
            })
            .then(function(response){
                self.setState({Books: response.data});
                console.log('publisher', response.data);
            })
            .catch(function(error){
                console.log('error', error);
            })
        }

        handleSelected(selectedPage) {
            console.log("selected", selectedPage);
            this.setState({ selectedPage: selectedPage });
          }

    render() {
        const Books = this.state;

        return (
            <div>
                <section class="isi-tab-kategori">
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-2 col-md-4">
                        <div class="sidebar">
                            <div className="row">
                                <div className="col-lg-12 col-6"><h5>{this.props.location.pathname.slice(10)}</h5></div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-10 col-md-8">
                        <div class="konten-kategori">
                            <div class="row">
                            {/* {Books.map((item, key) => {
                                    return <ListBook key ={key} judul={item.judul_buku} image={item.gambar} toko={item.id_toko} harga={item.harga} kondisi={item.kondisi}/>;
                                })} */}
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

export default Penerbits;

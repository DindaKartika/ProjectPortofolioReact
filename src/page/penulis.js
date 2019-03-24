import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import SidebarKategori from '../component/sidebarKategori'
import ListBook from '../component/kontenPenulis'


class Penulis extends Component {
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
            const writer = this.props.location.pathname.slice(9)
            console.log(writer)
            axios
            .get('http://0.0.0.0:5000/buku', {
                params:{
                    'penulis': writer,
                    'p' : selectedPage
                }
            })
            .then(function(response){
                self.setState({Books: response.data});
                console.log('writer', response.data);
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
        const {Books} = this.state;

        return (
        <div>
            <section className="isi-tab-kategori">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-sm-4">
                            <SidebarKategori title={this.props.location.pathname.slice(9)}/>
                        </div>
                        <div className="col-md-10 col-sm-8">
                            <div className="konten-kategori">
                                <div className="row">
                                {Books.map((item, key) => {
                                    return <ListBook key ={key} id={item.id_buku} judul={item.judul_buku} image={item.gambar} toko={item.id_toko} harga={item.harga} kondisi={item.kondisi}/>;
                                })}
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

export default Penulis;

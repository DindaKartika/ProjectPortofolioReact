import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import SidebarKategori from '../component/sidebarKategori'
import ListBook from '../component/kontenKategori'

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
            const category = this.props.location.pathname.slice(9)
            axios
            .get('http://0.0.0.0:5000/buku', {
                params:{
                    'kategori': category,
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

    render() {
        const {Books} = this.state;

        return (
        <div>
            <section className="isi-tab-kategori">
                <div className="container-fluid">
                    <div className="konten-kategori">
                        <div className="row">
                        {Books.map((item, key) => {
                            return <ListBook key ={key} judul={item.judul_buku} image={item.gambar} toko={item.id_toko} harga={item.harga} kondisi={item.kondisi}/>;
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
            </section>
        </div>
        );
    }
}

export default Penerbits;

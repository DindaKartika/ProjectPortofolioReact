import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import SidebarKategori from '../component/sidebarKategori'
import LoopPenjualan from '../component/loopOrder'

const base_url = 'http://0.0.0.0:5000/buku?kategori=';


class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            Penjualan: [],
            selectedPage: '1'
            };
            this.handleSelected = this.handleSelected.bind(this);
        }

        componentDidMount = () =>{
            const self = this;
            console.log(this.state.selectedPage)
            const tokens = localStorage.getItem('token')
            axios
            .get('http://0.0.0.0:5000/toko/penjualan', {
                params:{
                    'p' : this.state.selectedPage
                },
                headers:{
                    'Authorization' : 'Bearer ' + tokens
                }
            })
            .then(function(response){
                self.setState({Penjualan: response.data});
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
        const {Penjualan} = this.state;

        return (
        <div>
            <section className="isi-tab-kategori">
                <div className="container-fluid">
                    <div className="konten-kategori">
                    <h4 style={{textAlign:'center'}}>Penjualan</h4>
                    {Penjualan.map((item, key) => {
                        return <LoopPenjualan key ={key} id={item.id_pembelian} buku={item.buku} jumlah={item.jumlah} nomor_resi={item.nomor_resi} pembeli={item.pembeli}/>;
                    })}
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

export default Order;

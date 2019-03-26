import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import SidebarAdmin from "../component/sidebarAdmin";
import ListPembayaran from '../component/adminPembayaranLoop'

const base_url = 'http://0.0.0.0:5000/buku?kategori=';


class MetodePembayaran extends Component {
    constructor(props){
        super(props);
        this.state = {
            Pembayarans: [],
            selectedPage: '1'
            };
            this.handleSelected = this.handleSelected.bind(this);
        }

        componentDidMount = () =>{
            const self = this;
            const tokens = localStorage.getItem('token')
            console.log(this.state.selectedPage)
            axios
            .get('http://0.0.0.0:5000/admin/metode_pembayaran', {
                params:{
                    'p' : this.state.selectedPage
                },
                headers:{
                    'Authorization' : 'Bearer ' + tokens
                }
            })
            .then(function(response){
                self.setState({Pembayarans: response.data});
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
        }
        
        componentWillUpdate = () =>{
            const self = this;
            const tokens = localStorage.getItem('token')
            console.log(this.state.selectedPage)
            axios
            .get('http://0.0.0.0:5000/admin/metode_pembayaran', {
                params:{
                    'p' : this.state.selectedPage
                },
                headers:{
                    'Authorization' : 'Bearer ' + tokens
                }
            })
            .then(function(response){
                self.setState({Pembayarans: response.data});
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
        const {Pembayarans} = this.state;

        return (
        <div>
            <section class="isi-tab-admin">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2 col-sm-4" style={{margin:'0'}}>
                            <SidebarAdmin tab = {this.props.location.pathname.slice(7)}/>
                        </div>
                        <div class="col-md-10 col-sm-8">
                        {Pembayarans.map((item, key) => {
                            return <ListPembayaran key ={key} id={item.id_metode_pembayaran} metode_pembayaran={item.metode_pembayaran} instansi={item.instansi} status={item.status}/>;
                        })}
                            <div class="page">
                                <span>Page</span>
                                <PaginationComponent
                                totalItems={Pembayarans.length}
                                pageSize={10}
                                onSelect={this.handleSelected}
                                maxPaginationNumbers={5}
                                />
                            </div>
                            <Link to="/admin/tambah-pembayaran"><button className="buttonAdd">Tambah Metode Pembayaran</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default MetodePembayaran;

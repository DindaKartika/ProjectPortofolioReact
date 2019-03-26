import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import SidebarKategori from '../component/sidebarKategori'
import ListBook from '../component/adminBukuLoop'
import SidebarAdmin from "../component/sidebarAdmin";

const base_url = 'https://bukuku.site/buku?kategori=';


class AdminBuku extends Component {
    constructor(props){
        super(props);
        this.state = {
            Books: [],
            selectedPage: '1'
            };
            this.handleSelected = this.handleSelected.bind(this);
        }

        componentDidMount = () =>{
            const self = this;
            const tokens = localStorage.getItem('token')
            console.log(this.state.selectedPage)
            axios
            .get('https://bukuku.site/admin/buku', {
                params:{
                    'p' : this.state.selectedPage
                },
                headers:{
                    'Authorization' : 'Bearer ' + tokens
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
        
        componentWillUpdate = () =>{
            const self = this;
            const tokens = localStorage.getItem('token')
            console.log(this.state.selectedPage)
            axios
            .get('https://bukuku.site/admin/buku', {
                params:{
                    'p' : this.state.selectedPage
                },
                headers:{
                    'Authorization' : 'Bearer ' + tokens
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
            <section class="isi-tab-admin">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2 col-sm-4" style={{margin:'0'}}>
                            <SidebarAdmin tab = {this.props.location.pathname.slice(7)}/>
                        </div>
                        <div class="col-md-10 col-sm-8">
                        {Books.map((item, key) => {
                            return <ListBook key ={key} id={item.id_buku} toko={item.toko} judul={item.judul_buku} harga={item.harga} kategori={item.kategori} kode_promo={item.kode_promo} status={item.status}/>;
                        })}
                            <div class="page">
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
            </section>
        </div>
        );
    }
}

export default AdminBuku;

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";

import "./../css/bootstrap.min.css";
import "./../css/main.css";

import SidebarKategori from '../component/sidebarKategori'
import ListBook from '../component/kontenKategori'

const base_url = 'http://0.0.0.0:5000/buku?kategori=';


class Kategories extends Component {
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
            const category = this.props.location.pathname.slice(10)
            console.log(this.state.selectedPage)
            axios
            .get('https://bukuku.site/buku', {
                params:{
                    'kategori': category,
                    'p' : this.state.selectedPage
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
            const category = this.props.location.pathname.slice(10)
            console.log(this.state.selectedPage)
            axios
            .get('https://bukuku.site/buku', {
                params:{
                    'kategori': category,
                    'p' : this.state.selectedPage
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
                    <div className="row">
                        <div className="col-md-2 col-sm-4">
                            <SidebarKategori title={this.props.location.pathname.slice(10)}/>
                        </div>
                        <div className="col-md-10 col-sm-8">
                            <div className="konten-kategori">
                                <div className="row">
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

export default Kategories;

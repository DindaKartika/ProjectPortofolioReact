import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class FilterSearch extends Component {
  render() {
      return (
        <div>
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
        );
    }
}


export default FilterSearch;
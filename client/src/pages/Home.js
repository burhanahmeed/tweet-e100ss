import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Cards from '../components/home/Cards/Cards'
import Selection from '../components/home/Selection'


class Home extends Component {
  componentDidMount(){
    document.title = "Kondisi Jalan"
  }

  render() {
    return (
    <div className="App">
      <Selection/>
      <Cards/>
    </div>
    );
  }
}
export default Home;

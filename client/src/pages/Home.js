import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Cards from '../components/home/Cards/Cards'


class Home extends Component {
  componentDidMount(){
    document.title = "Tweet SS 100"
  }

  render() {
    return (
    <div className="App">
      <Cards/>
    </div>
    );
  }
}
export default Home;

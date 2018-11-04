import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Navabar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Portofolio from './components/portofolio';
import Team from './components/team';
import Footer from './components/footer';



class Home extends Component {
  render() {
    return (
      
    <div>
      <Navabar/>
      <Header/>
      <About/>
      <Portofolio/>
      <Team/>
      <Footer/>
    </div>
    );
  }
}
export default Home;
import React, { Component } from 'react';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import ControlSidebar from './components/ControlSidebar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
        <ControlSidebar />
      </div>
    );
  }
}

export default App;

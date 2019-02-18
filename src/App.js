import React, { Component } from 'react';

import Navbar from './Components/NavBar'
import Contentlayout from './Components/Contentlayout'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Contentlayout />
        <Footer />
      </div>
    );
  }
}

export default App;

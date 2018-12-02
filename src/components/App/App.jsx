import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  componentDidMount(){
    this.getGallery()
  }
  getGallery = ()=>{
    Axios.get('/gallery')
    .then((response) =>{
      console.log(response);
      this.setState({
        galleryList : response.data
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;

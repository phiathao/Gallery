import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    GalleryList: []
  }
  componentDidMount(){
    this.getGallery()
    console.log(this.state.GalleryList)
  }
  getGallery = ()=>{
    Axios.get('/gallery')
    .then((response) =>{
      console.log(response);
      this.setState({
        GalleryList : response.data
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
        <img alt="just a goat" src="images/goat_small.jpg"/>
        <GalleryList GalleryList={this.state.GalleryList} />
      </div>
    );
  }
}

export default App;

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
  }
  getGallery = ()=>{
    Axios.get('/gallery')
    .then((response) =>{
      this.setState({
        GalleryList : response.data
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  putGallery = (id)=>{
    Axios.put(`/gallery/like/${id}`)
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList GalleryList={this.state.GalleryList} putGallery={this.putGallery}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

class GalleryList extends Component {
    render(){
        let GalleryList = this.props.GalleryList.map( (gallery) => {
            return <div key={gallery.id}><GalleryItem img={gallery.path} like={gallery.likes} alt={gallery.description} id={gallery.id}/></div>
        })
        return (
            <div>
                <h1>GalleryList</h1>
                {GalleryList}
            </div>
        )
    }
}

export default GalleryList;
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
    render(){
        let GalleryList = this.props.GalleryList.map( (gallery) => {
            return <GalleryItem img={gallery.url}/>
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
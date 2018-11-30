import React, { Component } from 'react';

class GalleryList extends Component {
    render(){
        let GalleryList = this.props.GalleryList.map( (gallery) => {
            return <li><img alt='goat' src={gallery.path}/></li>
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
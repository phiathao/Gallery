import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        pictureIsClick : false
    }
    render(){
        return (
            <div>
                <img alt={this.props.alt} src={this.props.img}/>
                <button onClick={ ()=> this.props.likeFn(this.props.id)}>{this.props.like} Likes</button>
            </div>
        );
    }
}

export default GalleryItem;
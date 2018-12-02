import React, { Component } from 'react';

class GalleryItem extends Component {
    render(){
        return (
            <li key={this.props.key}>
                <img alt={this.props.alt} src={this.props.img}/>
                <button onClick={ ()=> this.props.likeFn(this.props.key)}>{this.props.like}</button>
            </li>
        );
    }
}

export default GalleryItem;
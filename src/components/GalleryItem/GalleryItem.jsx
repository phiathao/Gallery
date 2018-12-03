import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        pictureIsClick : false
    }
    changeState = (event) => {
        if(this.state.pictureIsClick){
            console.log(this.state.pictureIsClick);
            this.setState({
                pictureIsClick: false
            });
        } else {
            console.log(this.state.pictureIsClick);
            this.setState({
                pictureIsClick: true
            })
        }
    }
    render(){
        let pictureOrAlt
        if (!this.state.pictureIsClick){
            pictureOrAlt = <img alt={this.props.alt} src={this.props.img} onClick={this.changeState}/>
        } else {
            pictureOrAlt = <p onClick={this.changeState}>{this.props.alt}</p>
        }
        return (
            <div>
                {pictureOrAlt}
                {/* <img alt={this.props.alt} src={this.props.img} onClick={this.changeState}/> */}
                <button onClick={ ()=> this.props.likeFn(this.props.id)}>{this.props.like} Likes</button>
            </div>
        );
    }
}

export default GalleryItem;
import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        pictureIsClick : false,
        pictureLike : this.props.like
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
    addLikes = (id)=> {
        this.props.likeFn(id);
        this.setState({
            pictureLike : this.state.pictureLike + 1
        })
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
                <button value={this.state.pictureLike} onClick={()=>this.addLikes(this.props.id)}>{this.state.pictureLike} Likes</button>
            </div>
        );
    }
}

export default GalleryItem;
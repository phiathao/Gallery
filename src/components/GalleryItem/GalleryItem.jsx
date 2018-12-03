import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './GalleryItem.css';

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
            pictureOrAlt = <div className='divSize' onClick={this.changeState}>{this.props.alt}</div>
        }
        return (
            <Grid item xs className='GridSpacing'>
                {pictureOrAlt}
                <button value={this.state.pictureLike} onClick={()=>this.addLikes(this.props.id)}>{this.state.pictureLike} Likes</button>
            </Grid>
        );
    }
}

export default GalleryItem;
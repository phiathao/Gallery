import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import Grid from '@material-ui/core/Grid';



class GalleryList extends Component {
    render(){
        let GalleryList = this.props.GalleryList.map( (gallery) => {
            return <GalleryItem key={gallery.id} img={gallery.path} like={gallery.likes} alt={gallery.description} id={gallery.id} likeFn={this.props.putGallery}/>
        })
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <h2>Gallery List</h2>
                </Grid>
                {GalleryList}
            </Grid>
        )
    }
}

export default GalleryList;
import React, { Component } from 'react';
import Card from './card';

class Wrapper extends Component {
    render() {
      return (
        <div className='wrapperDiv'>
            {this.props.showCard ? (
                <Card data={this.props.data}
                loading={this.props.loading}
                photos={this.props.photos}
                showFullScreen={this.props.showFullScreen}
                showFullScreenImage={this.props.showFullScreenImage}
                fullScreenImage={this.props.fullScreenImage}
                />
            ) : (null)
            } 
        </div>
      );
    }  
}

export default Wrapper
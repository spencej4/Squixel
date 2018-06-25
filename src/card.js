import React, {Component} from 'react';

class Card extends Component   {
  render () {
    if (this.props.loading === false) {
      return (
        this.props.data.map((item, id) => {
          //For landscape photos
          if (this.props.data[id].width > this.props.data[id].height){
            return (
              <div className='imgSmall' key={id}
                    onClick={() => {
                      let image = this.props.data[id].urls.full;
                      let fullscreenData = this.props.data[id];
                      this.props.showFullScreenImage(image, fullscreenData)
                    }}
                >
                  <img src={this.props.data[id].urls.small} 
                    key={id} 
                    alt={this.props.data[id].description}
                    className='landscape'
                  />
              </div>
            )
          //For Portrait photos
          } else if (this.props.data[id].width < this.props.data[id].height) {
            return (
              <div className='imgSmall' key={id}
                    onClick={() => {
                      let image = this.props.data[id].urls.full;
                      let fullscreenData = this.props.data[id];
                      this.props.showFullScreenImage(image, fullscreenData)
                    }}
                >
                  <img src={this.props.data[id].urls.small} 
                    key={id} 
                    alt={this.props.data[id].description}
                    className='portrait'
                  />
              </div>
            )
          }
        })
      ) 
    }else {
        return ( 
          <div>
           {/* empty div  */}
          </div>
        )
    }  
  }
}

export default Card;
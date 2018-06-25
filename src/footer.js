import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <button className='loadMoreButton'
                        onClick={this.props.onPreviousClick}>Load Prev
                </button>
                <button className='loadMoreButton'
                        onClick={this.props.onNextClick}>Load Next
                </button>
            </div>
        )
    }
}

export default Footer
import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return ( 
          <div>
            <h1 className='loadingH1'>loading...</h1>
            <div className="lds-ellipsis"> <div></div><div></div><div></div><div></div></div>
          </div>
        )
    }
}

export default Loading
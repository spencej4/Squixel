import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.escFunction = this.escFunction.bind(this);
    }
    
    escFunction(event) {
        if (event.keyCode === 27) {
            this.props.closeSearch();
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', this.escFunction, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.escFunction, false);
    }
    
    render() {
            return (
                <div className='searchScreen'>
                    <ul>
                        <li><p>SEARCH</p></li>
                        <li><button className='closeSearchButton' onClick={() =>
                            this.props.onCloseSearchClick()}>X
                        </button></li>
                    </ul>
                    <form id="form"
                          className='myForm'
                          action = " "
                          method = " "
                          onSubmit={(event) => this.props.onInputSubmit(event)}
                          >
                        <input 
                            // id='Go'
                            className='searchBar' 
                            type='text' 
                            autoFocus
                            value={this.props.value} 
                            onChange={this.props.handleChange}
                            placeholder='Search photos'
                        />   
                    </form>
                </div>
            )
    }
}

export default SearchBar;
import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import SearchBar from './searchbar';


class Header extends Component {
    render() {
        return (
            <Router>
                <div className='header'>
                    <ul>
                        <div className='logo'>
                            <li className='logoFont'><Link to='/'>SQUIXEL</Link></li>
                        </div>
                    </ul>
                        <button className='searchButton' 
                            onClick={this.props.onSearchClick}>Search
                        </button>  
                            {this.props.showSearchInput ? 
                                <SearchBar onCloseSearchClick={() =>
                                                this.props.onCloseSearchClick()
                                            }
                                            closeSearch={() => 
                                                this.props.closeSearch()
                                            }
                                            handleChange={(e) =>
                                                this.props.handleChange(e)
                                            }
                                            onInputSubmit={(event) => 
                                             this.props.onInputSubmit()
                                            }
                                /> : null
                            }
                </div>
            </Router>
        )
    }
}

export default Header;
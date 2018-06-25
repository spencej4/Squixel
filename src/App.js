import React, { Component } from 'react';
import './App.css';
import Unsplash from 'unsplash-js';
import Header from './header';
import Landing from './landing';
import Loading from './loading';
import FullScreen from './fullscreen';
import Footer from './footer';
import Wrapper from './wrapper';

const unsplash = new Unsplash({
  applicationId: "923e03b3d8e1b91345512fe194223858801d195497f62ccbc83d4b21fe8620ee",
  secret: "758ab9e393d801809a873282179ccfc6791f243d108bf0525a09a73261abd443",
  callbackUrl: "https://localhost:3000"
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      nextData: [],
      imagesArrrayNext: [],
      loading: false,
      showCard: false,
      showSearchInput: false,
      value: '',
      pageNum: 0,
      showFullScreenImage: false,
      fullScreenImage: '',
      fullscreenData: '',
      showFooter: false
    }
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onCloseSearchClick = this.onCloseSearchClick.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
    this.showFullScreenImage = this.showFullScreenImage.bind(this);
    this.closeFullScreenImage = this.closeFullScreenImage.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
  }

//captures input search value, calls API and returns JSON data
  onInputSubmit(event) {
      this.setState({
          loading: true,
          showSearchInput: false,
          pageNum: 0,
          showCard: true, 
          showFooter: false
      });
      unsplash.search.photos(`${this.state.value}`, `${this.state.pageNum}` , 30) 
        .then(response => response.json())
        .then(json => this.setState((prevState) => {
          return {
            data: json.results,
            loading: false,
            showFooter: true,
            pageNum: this.state.pageNum + 1 
          }
        }))
        .catch((error) => {
          this.setState((prevState) => {
            return {
              loading: false,
              error: 'Error when retrieving'
            }
          });
        });
  }

//user clicks next, calls API and returns JSON data
  onNextClick() {
      this.setState({
        loading: true,
        showSearchInput: false,
        
        showFooter: false
      });
      unsplash.search.photos(`${this.state.value}`, `${this.state.pageNum + 1}`, 30)
        .then(response => response.json())
        .then(json => this.setState((prevState) => {
          return {
            showSearchInput: false,
            data: json.results,
            loading: false,
            showFooter: true,
            showCard: true,
            pageNum: this.state.pageNum + 1
          }
        }))
        .catch((error) => {
          this.setState((prevState) => {
            return {
              loading: false,
              error: 'Error when retrieving'
            }
          });
        });
  }
  
//user clicks previous, calls API and returns JSON data
  onPreviousClick() {
      this.setState({
        loading: true,
        showSearchInput: false,
        showFooter: false
      });
      unsplash.search.photos(`${this.state.value}`, `${this.state.pageNum - 1}`, 30)
        .then(response => response.json())
        .then(json => this.setState((prevState) => {
          return {
            showSearchInput: false,
            data: json.results,
            loading: false,
            showFooter: true,
            showCard: true,
            pageNum: this.state.pageNum - 1
          }
        }))
        .catch((error) => {
          this.setState((prevState) => {
            return {
              loading: false,
              error: 'Error when retrieving'
            }
          });
        });
  }
  
  onSearchClick() {
    this.setState({
      showSearchInput: true
    });
  }

  onCloseSearchClick() {
    this.setState({
      showSearchInput: false
    })
  }

  closeSearch () {
    this.setState ({
      showSearchInput: false
    })
  }

  //sets state to input value of search field 
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  showFullScreenImage(image, fullscreenData, ) {
    this.setState({
      showFullScreenImage: true,
      fullScreenImage: image,
      fullscreenData: fullscreenData
    })
  }

  closeFullScreenImage() {
    this.setState({
      showFullScreenImage: false,
      fullScreenImage: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Header 
          showSearchInput={this.state.showSearchInput}
          onSearchClick={this.onSearchClick}
          onCloseSearchClick={this.onCloseSearchClick}
          value={this.state.value}
          handleChange={this.handleChange}
          onInputSubmit={this.onInputSubmit}
          closeSearch={this.closeSearch}
        />
        {!this.state.showCard ? ( <Landing /> ) : (null)}
        {this.state.loading ? ( <Loading /> ) : (null)}
        <Wrapper showCard={this.state.showCard}
          data={this.state.data}
          loading={this.state.loading}
          photos={this.state.photos}
          showFullScreen={this.state.showFullScreen}
          showFullScreenImage={this.showFullScreenImage}
          fullScreenImage={this.state.fullScreenImage}/>
        {this.state.showFullScreenImage ? (
          <FullScreen photo={this.state.fullScreenImage} 
            fullscreenData={this.state.fullscreenData}
            closeFullScreen={this.closeFullScreenImage}
          />
          ) : (null)
        }
        {this.state.showFooter ? (
          <Footer onPreviousClick={this.onPreviousClick}
            onNextClick={this.onNextClick}/>
          ) : (null)
        }
      </div>
    );
  }
}

export default App;

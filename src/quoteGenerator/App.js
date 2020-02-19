import React from 'react';
import {connect } from 'react-redux';
import { getQuote } from './quoteActions.js';
import { bindActionCreators } from 'redux';
import './App.scss';
import background from './images/background.png';

class App extends React.Component {

  render(){
    return (
      <div id='background'>
        <div className='quoteBox' id='quote-box'>
            <h1 id='text' text={this.props.quote} alt="Insporational Quote">{this.props.quote}</h1>
            <h3 id='author' text={this.props.author} alt="Quote Author">{this.props.author}</h3>
            <button id='new-quote' onClick={() => this.props.getQuote()} data-size="large"><strong>New Quote!</strong></button>
            <a id='tweet-quote' href="https://twitter.com/intent/tweet" class="twitter-share-button" data-show-count="false">tweet</a>
        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  const { quote, author } = state;
  return {quote, author};
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getQuote
  },
  dispatch,
)

export default connect(mapState, mapDispatchToProps)(App);

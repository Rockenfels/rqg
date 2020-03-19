import React from 'react'
import { connect } from 'react-redux'
import { getQuote } from './quoteActions.js'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.scss';
//import { ReactComponent as Background } from 'src/images/background.png';

class App extends React.Component {

  render(){
    return (
      <div className='quoteBox' id='quote-box'>
          <h1 id='text' text={this.props.quote} alt="Insporational Quote"><strong>{this.props.quote}</strong></h1>
          <h3 id='author' text={this.props.author} alt="Quote Author">{this.props.author}</h3>
          <button id='new-quote' onClick={() => this.props.getQuote()}><strong>New Quote!</strong></button>
          <button id='tweet-button'>
            <FontAwesomeIcon icon={faTwitter} />
            <a className="button-icon" href="https://twitter.com/intent/tweet" id='tweet-quote'> </a>
          </button>
      </div>
    );
  }
}
const mapState = (state) => {
  const { quote, author } = state;
  return { quote, author };
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getQuote
  },
  dispatch,
)

export default connect(mapState, mapDispatchToProps)(App);

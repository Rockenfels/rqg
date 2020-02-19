import {randomQuote, QUOTELIST} from './quoteConstants.js';

const startQuote = randomQuote(QUOTELIST);
export const quoteReducer = (defaultState = {quote: startQuote.quote, author: startQuote.author}, action) => {
  switch(action.type){
        case 'NEWQUOTE':
        const thisQuote = randomQuote(QUOTELIST);
        console.log(thisQuote);
      return {...defaultState, quote: thisQuote.quote, author: thisQuote.author};
    default:
      return defaultState;
    }
  }

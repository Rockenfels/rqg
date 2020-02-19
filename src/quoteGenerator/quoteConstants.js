export const NEWQUOTE = 'NEWQUOTE';

export const QUOTELIST = [
  {quote: 'Character consists of what you do on the third and fourth tries.', author: '―James A. Michener'},
  {quote: 'Survival can be summed up in three words―never give up. That’s the heart of it really. Just keep trying.', author: '―Bear Grylls'},
  {quote: 'It always seems impossible until it’s done.', author: '―Nelson Mandela'},
  {quote: 'How long should you try? Until.', author: '―Jim Rohn'},
  {quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.', author: '―Thomas Edison'},
  //{qutoe: 'You just can’t beat the person who won’t give up.', author: '―Babe Ruth'},
  //{qutoe: 'Never give up on something that you can’t go a day without thinking about.', author: '―Winston Churchill'},
  {quote: 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.', author: '―Dale Carnegie'},
  //{qutoe: 'Never give up, for that is just the place and time that the tide will turn.', author: '―Harriet Beecher Stowe'},
  {quote: 'It does not matter how slowly you go as long as you do not stop.', author: '―Confucius'},
  {quote: 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.', author: '―Ralph Waldo Emerson'},
  {quote: 'Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.', author: '―Buddha'},
  {quote: 'Strive not to be a success, but rather to be of value.', author: '–Albert Einstein'},
  {quote: 'You miss 100% of the shots you don’t take.', author: '–Wayne Gretzky'},
  {quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.', author: '–Mark Twain'},
  {quote: 'The most common way people give up their power is by thinking they don’t have any.', author: '–Alice Walker'},
  {quote: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: '–Chinese Proverb'},
  {quote: 'Eighty percent of success is showing up.', author: '–Woody Allen'},
  {quote: 'Your time is limited, so don’t waste it living someone else’s life.', author: '–Steve Jobs'},
  {quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.', author: '–Christopher Columbus'},
  {quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: '–Maya Angelou'},
  {quote: 'Whether you think you can or you think you can’t, you’re right.', author: '–Henry Ford'},
  {quote: 'The best revenge is massive success.', author: '–Frank Sinatra'},
  {quote: "Life shrinks or expands in proportion to one's courage.", author: '–Anais Nin'},
  {quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: '–Anne Frank'},
];

export function randomQuote(list){
    const randomNumber = Math.floor(Math.random() * list.length);
    return list[randomNumber];
  };

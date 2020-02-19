
const value = () => Math.floor(Math.random() * 256);
let color = 'rgb(' + (value).toString() + ', ' + (value).toString() + ', ' + (value).toString() + ')');
let $button = $('#new-quote');

export default $button.click(function(){
  (this).css('background', color);
});

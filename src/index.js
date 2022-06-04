const messages =[
    'Hello world!!! - Any developer',
  'Happiness is when what you think, what you say, and what you do are in harmony - Mahatma Gandhi',
  'Who seeks shall find - Sófocles',
  'Eighty percent of success is showing up - Woody Allen',
  'Send nudes please, but not in binaries - Anyone',
  'Choose a job you love, and you will never have to work a day in your life - Confucio',
  'We all have two lives, the second begins when we realize we only have on',
  'The dreamers are the saviors of the world',
  'Always turn a negative situation into a positive situation - Michael Jordan'    
];

const randomMessage = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMessage };
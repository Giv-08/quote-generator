var quotes = [
  "You miss 100% of the shots you don't take <br>- <em>Wayne Gretzky</em>",
  "The best way to get started is to quit talking and begin doing <br>- <em>Walt Disney</em>",
  "Believe you can, and you're halfway there <br>- <em>Theodore Roosevelt</em>",
  "Success is not final. Failure is not fatal. It is the courage to continue that counts <br>- <em>Winston S. Churchill</em>",
  "Many of life's failures are people who did not realize how close they were to success when they gave up <br>- <em>Thomas A. Edison</em>",
  "Try not to become a person of success, but rather, try to become a person of value <br>- <em>Albert Einstein</em>",
  "Whoever is happy will make others happy too <br>- <em>Anne Frank</em>",
  "Be the change you wish to see in the world <br>- <em>Gandhi</em>",
  "I can accept failure. Everyone fails at something but I can't accept not trying <br>- <em>Michael Jordan</em>",
];

function newQuote() {
  var randomQuotes = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomQuotes];
}

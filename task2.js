const quotes = [
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. — Albert Einstein",
  "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
  "If you tell the truth, you don't have to remember anything. — Mark Twain",
  "So many books, so little time. — Frank Zappa",
  "A room without books is like a body without a soul. — Marcus Tullius Cicero"
];

let lastQuote ;

document.getElementById("newquote").addEventListener("click", function() {
  let random;

  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (random === lastQuote);

  lastQuote = random;

  document.getElementById("quote").textContent = quotes[random];
});

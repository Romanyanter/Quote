(function () {
  
  var text = document.getElementById("text");

  var author = document.getElementById("author");

  var quoteBtn = document.getElementById("quoteBtn");
  var quotes = [
    {
      img:"https://images.gr-assets.com/authors/1356810912p5/5810891.jpg",
      quoteContent: "“Be yourself; everyone else is already taken.”",
      authorName: "― Oscar Wilde",
    },
    {
      quoteContent: "“A room without books is like a body without a soul.”",
      authorName: "― Marcus Tullius Cicero",
    },
    {
      quoteContent:
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      authorName: "― Bernard M. Baruch",
    },
    {
      quoteContent:
        "“You only live once, but if you do it right, once is enough.”",
      authorName: "― Mae West",
    },
    {
      quoteContent:
        "“If you tell the truth, you don't have to remember anything.”",
      authorName: "― Mark Twain",
    },
    {
      quoteContent:
        "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
      authorName: "― Maya Angelou",
    },
    {
      quoteContent:
        "“A friend is someone who knows all about you and still loves you.”",
      authorName: "― Elbert Hubbard",
    },
    {
      quoteContent: "“Be the change that you wish to see in the world.”",
      authorName: "― Mahatma Gandhi",
    },
    {
      quoteContent:
        "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
      authorName: "― Ralph Waldo Emerson",
    },
    {
      quoteContent:
        "“A woman is like a tea bag; you never know how strong it is until it's in hot water.”",
      authorName: "― Eleanor Roosevelt",
    },
    {
      quoteContent: "“That which does not kill us makes us stronger.”",
      authorName: "― Friedrich Nietzsche",
    },
    {
      quoteContent: "“It is never too late to be what you might have been.”",
      authorName: "― George Eliot",
    },
    {
      quoteContent: "“If you judge people, you have no time to love them.”",
      authorName: "― Mother Teresa",
    },
    {
      quoteContent:
      "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
      authorName: "― Martin Luther King Jr., A Testament of Hope: The Essential Writings",
    },
    {
      quoteContent:
        "“Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.”",
      authorName: "― Markus Zusak, I Am the Messenger",
    },
  ];
  var currentRandom;
  function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    while (randomNumber === currentRandom) {
      randomNumber = Math.floor(Math.random() * quotes.length);
    }
    currentRandom = randomNumber;
    return randomNumber;
  }
  function getRandomQuotes() {
    var randomQuotes = quotes[getRandomNumber()];
    text.innerHTML = randomQuotes.quoteContent;
    author.innerHTML = randomQuotes.authorName;
  }
  quoteBtn.onclick = getRandomQuotes;
})();
  




$(document).ready(function(){
  $("#quote-button").click(function(){
    var quotes = 
    [
      "I don't want to earn my living; I want to live.  - Oscar Wilde",
      "Perserverance is not a long race; it is many short races one after the other.  - Walter Elliot",
      "The greater danger for most of us is not setting our aim too high and falling short; but in setting our aim too low, and achieving our mark.  - Michelangelo",
      "No act of kindness, no matter how small, is ever wasted  - Aesop",
      "Be yourself; everyone else is already taken  - Oscar Wilde",
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.  - Albert Einstein",
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.  - Bernard M. Baruch",
      "In three words I can sum up everything I've learned about life: it goes on.  - Robert Frost",
      "If you tell the truth, you don't have to remember anything.  - Mark Twain",
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.  - Maya Angelou", 
      "Light travels faster than sound. This is why some people appear bright until they speak.  - Steven Wright",
      "Opportunity does not knock, it presents itself when you beat down the door.  - Kyle Chandler",
      "A creative man is motivated by the desire to achieve, not by the desire to beat others.  - Ayn Rand",
      "Being defeated is often a temporary condition. Giving up is what makes it permanent.  - Marilyn Vos Savant",
      "Love is like the wind, you can’t see it but you can feel it.  - Nicholas Sparks"
    ];
    function generateQuote() {
    var quote = quotes[Math.floor(Math.random()*quotes.length)];
    return quote;
    };
    $(".quote-content").html(generateQuote())
  });
});


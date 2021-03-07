const message = document.getElementById("message")

/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/

var wordCounts = { };
var words = str.split(/\b/);

for(var i = 0; i < words.length; i++)
    wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;

findMostFrequentWords = (string) => {
    var wordsArray = string.split(/\s/);
    var wordOccurrences = []
    for (var i = 0; i < wordsArray.length; i++) {
        wordOccurrences[wordsArray[i]] = (wordOccurrences[wordsArray[i]] || 0) + 1;
    }
    const maximum = Object.keys(wordOccurrences).reduce(function (accomulated, current) {
        return wordOccurrences[current] >= wordOccurrences[accomulated] ? current : accomulated;
    });
    const result = []
    Object.keys(wordOccurrences).map((word) => {
        if (wordOccurrences[word] === wordOccurrences[maximum])
            result.push(word);
    })
    return result
    }

    let messageWords = []
    let theMostFrequentWord;
    let numberOfWordsInTheMessage = 0;

console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
console.log(`The number of words in the message is ${numberOfElementsInTheArray}`)

function randomImg() {
    var quotes = [
      {
        text:  "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        img: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg",
      },
      {
        text: "You are a wizard, Harry (c) Hagrid",
        img:  "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg",
      },
    ];
    var button = buttons[Math.floor(Math.random() * buttons.length)];
    document.getElementById("button").innerHTML =
      '<p>' + button.text + '</p>' +
      '<img src="' + button.img + '">';
  }

  /// First picture's url is not working
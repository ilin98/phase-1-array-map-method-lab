const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = tutorials.map(function(array){
//   return array.forEach(function(tutorial) {
//     let words = tutorial.split(' ');
//     for (word of words) {
//       let capWords = words.charAt(0).toUpperCase() + titles.slice(1)
//     }
//     let final = capWords.join(" ")
//   })
// });


const titleCased = function() {
  return tutorials.map(function(indTutorial) {
    let words = indTutorial.split(" ");
    let newArray = [];
    for (let i = 0; i < words.length; i++) {
      let indWords = words[i];
      newArray.push(indWords.charAt(0).toUpperCase() + indWords.slice(1));
    }
    return newArray.join(" ")
  })
}

console.log(titleCased())

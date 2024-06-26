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

const titleCased = () => {
  return tutorials.map(tutorial => {
    // Loop over each tutorial and then convert it to title case
    // First split each tutorial into a word
    return tutorial.split(" ").map(
      /*
      Change the first letter of each word to upperCase
      and then join the titleCased words back to one string
    */
      word => word.charAt(0).toUpperCase() + word.slice(1)
      ).join(" ");
  })
}
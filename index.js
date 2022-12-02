function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i <word.length/2;i++){
    const j = word.length -1 -i
    const startChar = word[i]
    const endChar = word[j]
    if(startChar !== endChar) return false
  }
  return true
}

/* 
  We want to have a start and an end point that will hold the value of a letter in our word
  then we want to iterate through the word and divide the word into 2 pieces to determain when to stop iteration
  we want to return false if the letters dont match
  we want to return true if the letters in the variables match
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

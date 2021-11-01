function isPalindrome(word) {
  let splitString= word.split("")
  let reverseString= splitString.reverse()
  let reverseWord= reverseString.join("")

  console.log(reverseWord)

  if (word === reverseWord) {
    return true
  } else {
    return false
  }
}

/* 
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

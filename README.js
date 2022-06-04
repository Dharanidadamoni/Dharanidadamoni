- 👋 Hi, I’m @Dharanidadamoni
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...

<!---
Dharanidadamoni/Dharanidadamoni is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function printLettersBetween(alphabet, startLetter, endLetter) {
  // Print the letter
  console.log(startLetter, endLetter);

  // Base Case: Stop the program when startLetter equals endLetter
  if (startLetter == endLetter) {
    return startLetter;
  }
  startI = alphabet.indexOf(startLetter);
  endI = alphabet.indexOf(endLetter);
  // If the starting letter is after than the ending
  // letter, decrease the index by one. Otherwise, increase
  // the index by one.
  if(startI > endI){
    console.log(startLetter)
    startI = startI -1;
    startLetter = alphabet[startI];
  } else {
    console.log(startLetter)
    startI = startI + 1;
    startLetter = alphabet[startI]
  }

  // Make a recursive call with the modified letter.
  return printLettersBetween(alphabet, startLetter, endLetter);
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printLettersBetween;
} catch {
  module.exports = null;
}

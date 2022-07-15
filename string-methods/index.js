// Case changing
// .toUpperCase
// Used to convert a string to upper case
// .toLowerCase
// Used to convert a string to lower case

const myName = "Miriam Naomi Anyango"


console.log(myName.toLocaleUpperCase())
console.log(myName.toLowerCase())
console.log(myName)

// Concatenation and Interpolation
// Concatenation and interpolation refers to putting together more than one string
// Concatenation is specifically by use of addition sign 
// while interpolation refers to use of template literals. 
// The content wrapped in bacticks rather than single or double quotes.


const myString = "Usizoee kuleta mchezo"
const yourString = "Haswa mahali ambapo watu wanamaanisha"

const fullMessage = "This" + " " + "is" + " " + "actually" + " " + "the" + " " + "message" + " " + "he" + " " + "gave;"+ " " + myString + " "+ yourString

console.log(fullMessage)

const herMessage = `This is actually the message she gave; ${myString} ${yourString}`
console.log(herMessage)

// In full message we have used string concatenation while in her message we have used string interpolation
// interpolation is much simpler and renders the code cleaner, however, the choice on what to use 
// is dependent on particular individuals.
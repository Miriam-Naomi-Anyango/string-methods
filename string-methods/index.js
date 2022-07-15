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


// Extracting a section of a string
// .slice method
// The slice() method extracts a section of a string and returns it as a new string, 
// without modifying the original string.

/*The .slice method takes arguments:the index at which the extraction should begin and the index before which it should end.
When we talk about indexes of a string, we're talking about how to access specific characters at various points within 
the string. Because we start at index 0 instead of 1, the index of each character in a string is always one less than the 
character's place in the string. The second character is at index 1, the fifth at index 4, the twelfth at index 11, and so on.
The index of the last character is always one less than the length (Links to an external site.) of the string:*/

// If we omit both arguments, .slice() will return a full copy of the original string
// If we provide a single argument, .slice() will return a copy from that index to the end of the string. 
// If we wanted the first three characters of Dijkstra's name, we would specify 0 as the first argument, the index at which to start, 
// and 3 as the second argument

console.log('Edsger Dijkstra'.slice(0, 3));
//=> "Eds"
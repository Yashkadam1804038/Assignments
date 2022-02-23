//enum
// collection of string constant

enum Color{
    RED,
    GREEN,
    BLUE,
    BLACK,
    BROWN
}

// declare variable of type color
//implicit

const color1 = Color.RED
console.log(`color1 = ${color1}, type = ${typeof color1}`)

//explicit
const color2: Color = Color.BLACK
console.log(`color2 = ${color2}, type = ${typeof color2}`)


// remembering number is difficult
// numbers gets assign to colors
// accordingly gives output in the form of numbers
// we can change the values in the enum declaration
// e.g enum weekdays{
//    MONDAY='monday'
//       }
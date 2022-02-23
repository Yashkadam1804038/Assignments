//enum
// collection of string constant
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
    Color[Color["BLACK"] = 3] = "BLACK";
    Color[Color["BROWN"] = 4] = "BROWN";
})(Color || (Color = {}));
// declare variable of type color
//implicit
var color1 = Color.RED;
console.log("color1 = ".concat(color1, ", type = ").concat(typeof color1));
//explicit
var color2 = Color.BLACK;
console.log("color2 = ".concat(color2, ", type = ").concat(typeof color2));

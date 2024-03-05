var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
var drawPoint = function (point) { };
drawPoint({
    x: 1,
    y: 2,
});
//COHESION
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw = function () {
        console.log("X:" + this.x + "Y: " + this.y);
    };
    //functions are called methods when part of a class
    Point2.prototype.getDistance = function (another) {
        //code
    };
    return Point2;
}());
var point = new Point2(); //instanstiate 
point.x = 1;
point.y = 2;
point.draw();

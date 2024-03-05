let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a", false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
  Purple = 3,
}

let backgroundColor = Color.Red;

// let message: string;
// message = "abc";
// let endsWithC = message.endsWith("c");
// let alternativeWay = message.endsWith("c");

//INTERFACING FOR TYPE CHECKING.ALWAYS USEPASCAL CONVENTION OR UPPERCASE
interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {};

drawPoint({
  x: 1,
  y: 2,
});

//COHESION
class Point2 {
  private x: number | undefined;
  private y: number | undefined;

  //checks to make sure arguments are same type
  //? makes parameter optoinal
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X: " + this.x + "Y: " + this.y);
  }
}

let point = new Point2(1, 2); //instanstiate
point.draw();

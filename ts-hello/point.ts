//modules is a component in REACT



export class Point2 {
  //checks to make sure arguments are same type
  //? makes parameter optoinal
  constructor(private _x?: number, private _y?: number) {} //these are fields. variables declared in a class

  draw() {
    console.log("X: " + this._x + "Y: " + this._y);
  }

  get x() {
    // this is a prop[erty with get or set// getters or setters like react.
    return this._x;
  }

  set x(value) {
    if (value && value < 0) {
      throw new Error("value canot be less than 0.");
    }
    this._x = value;
  } //use a function like this to access private variables outside of the function
}

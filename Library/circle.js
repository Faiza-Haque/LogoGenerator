const Shape = require ("Shape.js")

class Circle extends Shape{

 
// This is a constructor with 2 parameters
constructor(color) {
  super (color)
}
render (){
    const myCircle = `<circle cx="100" cy="50" r="40" fill="${super.getColor()}" />`
    return myCircle 
}

}
module.exports = Circle
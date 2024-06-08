const Shape = require ("Shape.js")
class Triangle extends Shape{


// This is a constructor with 2 parameters
constructor(color) {
  super (color)
}
render (){
    //you have figure out the triangle shape info--can not take circles infor!!!!!
    const myTriangle = `<polygon points="100,0 0,180 200,180 " fill="${super.getColor()}" />`
    return myTriangle 
}

}
modeule.export = Triangle
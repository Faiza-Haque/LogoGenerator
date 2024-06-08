const shape = require("./shape")
class triangle extends shape{


// This is a constructor with 2 parameters
constructor(color) {
  super (color)
}
render (){
    //you have figure out the triangle shape info--can not take circles infor!!!!!
    const myTriangle = `<polygon points="150,0 40,180 250,180 " fill="${super.getColor()}" />`
    return myTriangle 
}

}
module.exports = triangle
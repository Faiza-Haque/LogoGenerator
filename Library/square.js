const shape = require("./shape")
class square extends shape{

 
// This is a constructor with 2 parameters
constructor(color) {
  super (color)
}
render (){
    //you have figure out the square shape info--can not take circles infor!!!!!
    const mySquare = `<polygon points="100,50 200,50 200,150 100,150" fill="${super.getColor()}" />`
    return mySquare 
}

}
module.exports = square
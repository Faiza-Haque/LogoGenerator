const shape = require("./shape")
class square extends shape{

 
// This is a constructor with 2 parameters
constructor(color) {
  super (color)
}
render (){
    //you have figure out the square shape info--can not take circles infor!!!!!
    const mySquare = `<polygon points="0,0 100,0 100,100 0,100" fill="${super.getColor()}" />`
    return mySquare 
}

}
module.export = square
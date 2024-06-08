class square extends shape{

    //Default Constructor
    constructor() { }
// This is a constructor with 2 parameters
constructor(color) {
  super (color)
}
render (){
    //you have figure out the square shape info--can not take circles infor!!!!!
    const mySquare = `<t cx="150" cy="100" r="80" fill="${super.getColor()}" />`
    return mySquare 
}

}
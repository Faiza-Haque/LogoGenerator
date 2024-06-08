class triangle extends shape{

    //Default Constructor
    constructor() { }
// This is a constructor with 2 parameters
constructor(color) {
  super (color)
}
render (){
    //you have figure out the triangle shape info--can not take circles infor!!!!!
    const myTriangle = `<t cx="150" cy="100" r="80" fill="${super.getColor()}" />`
    return myTriangle 
}

}

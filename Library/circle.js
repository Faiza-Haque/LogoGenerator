class circle extends shape{

    //Default Constructor
    constructor() { }
// This is a constructor with 2 parameters
constructor(color) {
  super (color)
}
render (){
    const myCircle = `<circle cx="150" cy="100" r="80" fill="${super.getColor()}" />`
    return myCircle 
}

}

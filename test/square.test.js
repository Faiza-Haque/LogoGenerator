const Square = require ("../Library/square")
const square = new Square("pink")
describe ("square", () => {
it ("should render successfully", ()=>{
   
    expect (square.render()) .toEqual(`<polygon points="100,50 200,50 200,150 100,150" fill="pink" />`)
});
it ("should change shape color", ()=>{
    square.setColor("black")
    expect (square.render()) .toEqual(`<polygon points="100,50 200,50 200,150 100,150" fill="black" />`)
})
})
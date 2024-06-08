const Triangle = require ("../Library/triangle")
const triangle = new Triangle("pink")
describe ("triangle", () => {
it ("should render successfully", ()=>{
   
    expect (triangle.render()) .toEqual(`<polygon points="150,0 40,180 250,180 " fill="pink" />`)
});
it ("should change shape color", ()=>{
    triangle.setColor("black")
    expect (triangle.render()) .toEqual(`<polygon points="150,0 40,180 250,180 " fill="black" />`)
})
})
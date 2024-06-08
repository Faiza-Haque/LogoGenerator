const Circle = require ("../Library/circle")
const circle = new Circle("pink")
describe ("circle", () => {
it ("should render successfully", ()=>{
   
    expect (circle.render()) .toEqual(`<circle cx="150" cy="100" r="80" fill="pink" />`)
});
it ("should change shape color", ()=>{
    circle.setColor("black")
    expect (circle.render()) .toEqual(`<circle cx="150" cy="100" r="80" fill="black" />`)
})
})
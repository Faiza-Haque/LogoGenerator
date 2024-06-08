const inquirer = require("inquirer")
const fs = require('fs')
const Circle = require("./Library/circle")
const Triangle = require("./Library/triangle")
const Square = require("./Library/square")
const colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
    "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet",
    "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral",
    "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan",
    "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki",
    "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred",
    "darksalmon", "darkseagreen", "darkslateblue", "darkslategray",
    "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen",
    "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green",
    "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory",
    "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue",
    "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen",
    "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue",
    "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime",
    "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue",
    "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
    "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace",
    "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod",
    "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff",
    "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown",
    "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell",
    "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow",
    "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise",
    "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]
const shapes = ["circle", "triangle", "square"]


let textInput = "";
const textValidation = async (text) => {

    if (text.length > 3) {
        console.log("\nmakesure the text is no more than 3 characters");
        return false;
    }
    return true
}
const promptText = async () => {
    const res = await inquirer.prompt([{
        type: "input",
        name: "userInput",
        message: "enter text no more than three characters",
        validate: textValidation

    }])


    return res.userInput;

}


const getColor = async (message) => {
    let colorValue = "";
    const res = await inquirer.prompt([{
        type: "input",
        name: "colorInput",
        message: `enter ${message} color keyword (OR a hexadecimal number)`,
        validate: colorValidation


    }])
    colorValue = res.colorInput
    return colorValue;


}
const colorValidation = async (color) => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (color.charAt(0) === "#") {
        if (hexColorRegex.test(color) === false) {

            console.log("hex color is invalid");
            return false;
        }

    } else {
        if (colors.includes(color) === false) {
            console.log("color keyword is invalid");
            return false;

        }
    }
    return true;
}
const getShape = async () => {
    let shapeValue = "";
    const res = await inquirer.prompt([{
        type: "input",
        name: "shapeInput",
        message: "enter list of shapes to choose from: circle, triangle, and square",
        validate: shapeValidate
    }])
    shapeValue = res.shapeInput
    return shapeValue;
}
const shapeValidate = async (shape) => {
    if (shapes.includes(shape) === false) {

        console.log("shape keyword is invalid");
        return false;

    }
    return true;
}
//parameters for the shape name and shape color
//this function will get the user input and create an object based on what the user asks for
const getShapeObject = (shapeName, shapeColor) => {
    let shapeObject = null
    if (shapeName === "circle")
        shapeObject = new Circle(shapeColor);
    else if (shapeName === "triangle")
        shapeObject = new Triangle(shapeColor)
    else
        shapeObject = new Square(shapeColor)
    return shapeObject
}
/**
 * Ready Function will generate all the prompt to get what the user inputs. It will write a svg file once all the 
 * necessary data is collected to create that file.
 */
const ready = async () => {

    const textInput = await promptText()
    const textColor = await getColor("text")
    const shapeType = await getShape()
    const shapeColor = await getColor("shape")

    // invoking an object for shape type and color
    const shape = getShapeObject(shapeType, shapeColor)
    console.log (shape)
    /**
     This variable is rendering the svg file and license of the svg
     */
    const content = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shape.render()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textInput}</text>

</svg>`

    //this method is to write the logo.svg file
    fs.writeFile('./examples/logo.svg', content, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
            console.log("logo.svg was generated")
        }
    });

}


ready()





















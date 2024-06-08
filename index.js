const inquirer = require("inquirer")

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
    // return text.length <= 3;
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
    // textInput =res.userInput
    // console.log(res.userInput)

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
    shapeValue = res.shapeInpute
    return shapeValue;
}
const shapeValidate = async (shape) => {
    if (shapes.includes(shape) === false) {

        console.log("shape keyword is invalid");
        return false;

    }
    return true;
}


const ready = async () => {

    await promptText()
    await getColor("text")
    await getShape()
    await getColor("shape")
}
ready()



















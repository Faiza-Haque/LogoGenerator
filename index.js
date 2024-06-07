const inquirer = require("inquirer")

// let textInput = "";
// const promptText = ()=> {
//     inquirer.prompt ([{
//         type:"input", 
//         name: "userInput",
//         message: "enter text no more than three characters"



//     }]).then(res=>{
//         // textInput =res.userInput
//     // console.log(res.userInput)

//     return res.userInput;

//     })
// }
// // console.log(res.userInput)
// texInput = promptText()
// console.log(textInput)


const getText = async () => {
    let isValid = false;
    let textVal = "";
    while (!isValid) {
      const res = await inquirer.prompt([
        {
          type: "input",
          name: "text",
          message: "Enter text no more than 3 characters: "
        }
      ]);
      textVal = res.text;
      if (textVal.length <= 3) {
        isValid = true;
      } else {
        console.log("ERROR!! Make sure your input is no more than 3 characters");
      }
    }
    return textVal;
  };
  // Usage of getText
  getText().then(text => {
    console.log("Final input:", text);
  });
  
  
  
  
  
  
  
  
  
  









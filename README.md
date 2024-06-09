# LogoGenerator

## Table of Contents
1. Project Description
2. My Motivation
3. What I Learned
4. What I'd do Differently 
5. User Story
6. Acceptance Criteria
7. Additional Requirements
8. Deployed Link/ Video Link
9. Aknowledgements
10. Contact Information


## Project Description
This project aims to create a logo generator tool using Node.js. The tool will allow users to generate a logo and save it as an SVG file. This application prompts asks the user to choose a color and shape, provided text for the logo, and save the generated SVG to a .svg file.


The logo generator tool will be a command-line application that uses Node.js to generate the SVG logo.
The tool will have the following features:
1. User can choose a color for the logo.
2. User can choose a shape for the logo (e.g., circle, square, triangle,)
3. User can provide text for the logo.
4. The tool will generate an SVG logo based on the user's input.
5. The tool will save the generated SVG logo to a .svg file.

Due to this application being deployed, I have included a video that demonstrates how to use this application. 
Additionally, I have also included the part where I test the application and the passing of the test.


## What was my motivation?
I was motivated to create this project because I wanted to explore the capabilities of Node.js and learn more
about SVG generation. I also wanted to create a tool that could be useful for users who need a
quick and easy way to generate a logo.


## What did I learn?
I learned how to use Node.js to generate SVG files and how to create a command-line application.
I also learned how to use JavaScript to create a user interface and how to handle user input.
I also learned how to use Jest for testing and how to write unit tests for my application.


## What would I do differently?
If I were to do this project again, I would research a little more on logos and  the codes people have used to deploy their application. Based on that I could have coded my application within a much smaller time frame where as this application took longer that I would have liked.


## User Story
As a user, I want to be able to generate a logo using a command-line application so that
I can quickly and easily create a logo for my business or project.
As a user, I want to be able to choose a color for my logo so that I can
match my brand's color scheme.
As a user, I want to be able to choose a shape for my logo so that I can
create a unique and recognizable logo.
As a user, I want to be able to provide text for my logo so that I can
add my business or project's name to the logo.
As a user, I want to be able to save my generated logo as an SVG file so that
I can use it on my website or in marketing materials.


## Acceptance Criteria
1. The application should be a command-line application.
2. The application should prompt the user to choose a color for the logo.
3. The application should prompt the user to choose a shape for the logo.
4. The application should prompt the user to provide text for the logo.
5. The application should generate an SVG logo based on the user's input.
6. The application should save the generated SVG logo to a .svg file.


## Additional Requirements
This application uses Jest for running the unit tests and Inquirer for collecting input from the user.
The application may be invoked by using the following command: node index.js


Directory Structure of LogoGenerator:
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           


-This application uses Jest to test the shapes, Triangle, Square, and Circle.
-Each shape class may be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
-Each shape class may be tested for a constructor that accepts a color and sets it as a property
-Each shape class may be tested for a method that returns the SVG string for the shape with the
given color and text.
it ("should render successfully", ()=>{
   
    expect (circle.render()) .toEqual(`<circle cx="150" cy="100" r="80" fill="pink" />`)
});
it ("should change shape color", ()=>{
    circle.setColor("black")
    expect (circle.render()) .toEqual(`<circle cx="150" cy="100" r="80" fill="black" />`)
})

-It uses Inquirer to prompt the user for input and to display the logo options.
-It uses Node.js to run the application and generate the SVG file.
-It uses JavaScript to create the user interface and handle user input.
-It uses SVG.js to generate the SVG file.
-It uses Jest to run the unit tests for the shapes and the application.

## Deployed Link/ Video Link
[deployed link](https://github.com/Faiza-Haque/LogoGenerator)
[video link](https://app.screencastify.com/v2/watch/8MJ9nsousGkzb2qAoPRv)


## Acknowledgments 
- Tutors and TAs
- My Classmates
- My Instructor
- My Friends
Everyone listed above helped me complete this project. I would like to thank them for their support.


## Contact Information
Thanks for exploring my Repo!

If you would like to know more please feel free to contact me:
Email: faizahaque90@gmail.com
GitHub URL: https://github.com/Faiza-Haque
LinkedIn URL: https://www.linkedin.com/authwall 
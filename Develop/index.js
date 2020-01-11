// GIVEN the developer has a GitHub profile

// WHEN prompted for the developer's GitHub username and favorite color

// THEN a PDF profile is generated rom the user provided GitHub profile. The generated resume includes:
    
    // a bio image from the user's GitHub profile

    // the user's location and a link to their GitHub profile

    // the number of: public repositories, followers, GitHub stars and following count

    // The background color of the generated PDF matches the color that the user provides


var ;


const questions = [
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub Username"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ['green', 'blue', 'pink', 'red'],
    }
];

function writeToFile(fileName, data) {

}

function init() {

    init();

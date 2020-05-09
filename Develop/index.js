const fs = require("fs");
const path = require("path");
const open = require("open");
const axios = require('axios');
const inquirer = require('inquirer');
const conversionFactory = require('electron-html-to');
const { getHTML } = require("./getHTML");


var conversion = conversionFactory({
    converterPath: conversionFactory.converters.PDF
});

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
        choices: ['blue', 'green', 'pink', 'red'],
    }
];

function writeFile(fileName, data) {

}

function init() {
    inquirer.prompt(questions).then(function ({ username, color }) {
        // console.log(username, color);
        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then((response) => {
            // console.log(response.data);

            let info = response.data;
            info.color = color;
            info.stars = 0;
            for (let i = 0; i < info.length; i++) {
                info.stars += info[i].stars_count;
            }

            if (!info.location) {
                info.location = "No location available";
            }

            let resumeHTML = getHTML(info);
            conversion({ html: resumeHTML }, function (err, result) {
                if (err) {
                    return console.error(err);
                }
                //https://nodejs.org/en/knowledge/advanced/streams/how-to-use-stream-pipe/
                result.stream.pipe(fs.createWriteStream(path.join(__dirname, 'github.pdf')));
                conversion.kill();
            })

            //https://www.w3schools.com/nodejs/met_path_join.asp
            //process.cwd() returns current working directory of Node.js process
            open(path.join(process.cwd(), "github.pdf"));
        })
    })
};

init();

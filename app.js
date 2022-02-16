// Get all needed modules
var fs = require('fs');
var readline = require('readline');

// Create a readline interface
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Greeting
console.log('\x1b[33m%s\x1b[0m', 'Hello, to which challenge do you want to have a dataset? (1-2)');

// Get input
rl.question('> ', function(answer) {


    // Ask how many lines the dataset should have
    rl.question('How many lines do you want the dataset to have?\n> ', function(answer2) {

        switch (answer) {

            case '1':

                break;

            case '2':

                break;

            default:

                console.log('\x1b[31m%s\x1b[0m', 'Invalid input');
                process.exit(0);


        };

    });

});
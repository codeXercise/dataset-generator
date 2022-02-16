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

                // Log
                console.log("Generating dataset for challenge 1...");

                // Create a new file
                fs.writeFile('dataset_1.txt', '', function(err) {

                    if (err) {
                        return console.log(err);
                    }

                    // Loop through the lines
                    for (var i = 0; i < answer2; i++) {

                        // Generate a random number between 1 and 9
                        var rocket = Math.floor(Math.random() * 9) + 1;

                        // Randomly generate a number between 1 and 100
                        var fuel = Math.floor(Math.random() * 100) + 1;

                        // Add "0"`s to the number so that it is 3 digits long
                        if (fuel < 10) {
                            fuel = "00" + fuel;
                        } else if (fuel < 100) {
                            fuel = "0" + fuel;
                        }

                        // Generate a 0 or 1
                        var success = Math.floor(Math.random() * 2);

                        // Generate the string
                        var line = rocket + '-' + fuel + '-' + success + '\n';

                        // Write the line to the file
                        fs.appendFile('dataset_1.txt', line, function(err) {

                            if (err) {
                                return console.log(err);
                            }

                        });

                    }

                    // Log
                    console.log("Dataset generated!");
                    console.log("Dataset saved to dataset_1.txt");

                });


                break;

            case '2':

                // Log
                console.log("Generating dataset for challenge 2...");

                // Create a new file
                fs.writeFile('dataset_2.txt', '', function(err) {

                    if (err) {
                        return console.log(err);
                    }

                    // Loop through the lines
                    for (var i = 0; i < answer2; i++) {

                        // Generate a random number between 1 and 9
                        var rocket = Math.floor(Math.random() * 9) + 1;

                        // Randomly generate a number between 1 and 100
                        var fuel = Math.floor(Math.random() * 100) + 1;

                        // Add "0"`s to the number so that it is 3 digits long
                        if (fuel < 10) {
                            fuel = "00" + fuel;
                        } else if (fuel < 100) {
                            fuel = "0" + fuel;
                        }

                        // Generate a 0 or 1
                        var success = Math.floor(Math.random() * 2);

                        // Generate the string
                        var line = rocket + '-' + fuel + '-' + success + '\n';

                        // Write the line to the file
                        fs.appendFile('dataset_2.txt', line, function(err) {

                            if (err) {
                                return console.log(err);
                            }

                        });

                    }

                    // Log
                    console.log("Dataset generated!");
                    console.log("Dataset saved to dataset_2.txt");

                });


                break;

            default:

                console.log('\x1b[31m%s\x1b[0m', 'Invalid input');
                process.exit(0);


        };

    });

});
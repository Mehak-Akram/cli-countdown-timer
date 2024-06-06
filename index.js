#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
console.log(chalk.bold.cyanBright("\n\t\t WELCOME TO MEHAK-AKRAM PROJECT -  COUNTDOWN-TIMER \t\t\n"));
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "please Enter the amount of second",
    validate: (input) => {
        if (isNaN(input)) {
            return chalk.red(`please enter valid number`);
        }
        else if (input > 60) {
            return chalk.red(`second must be in 60`);
        }
        else {
            return true;
        }
    },
});
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log(chalk.bold.yellow(`Timer has expired`));
            process.exit();
        }
        const minutes = Math.floor((timeDiff % (3600 * 24)) / 3600);
        let sec = Math.floor(timeDiff % 60);
        console.log(`${minutes.toString().padStart(2, "0")}:${sec
            .toString()
            .padStart(2, "0")}`);
    }, 1000);
}
startTime(input);

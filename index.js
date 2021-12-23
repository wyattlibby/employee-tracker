const inquirer = require ("inquirer");
const mysql = require ("mysql2");
require ("console.table");
const connection = require ("./config/connection");

console.log ("welcome to employee tracker");
mainMenu ();

async function mainMenu (){
    const {action}= await inquirer.prompt({
        message: "what would you like to do",
        name: "action",
        type: "list",
        choices: ["exit"]
    });
    switch(action){
        case "exit": return finish();
    }
}

function finish(){
    console.log("thank you for using employee tracker");
    process.exit();
}
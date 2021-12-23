const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");
const db = require("./config/connection");



async function mainMenu(){
  const response = await inquirer.prompt({
      message:"choose an action", 
      name: "action",
      type: "list",
      choices: ["add manager", "add engineer", "add intern", "finish"]
  });

  switch(response.action){
      case "add manager": return addManager();
      case "add engineer": return addEngineer();
      case "add intern": return addIntern();
      case "finish": return finish();
  }
}

async function viewDepartments() {
  const rows = await db.query("select * from department");
  console.table(rows);
  mainMenu();
}

function finish() {
  console.log("thank you for using employee tracker");
  process.exit();
}

console.log("welcome to employee tracker");
mainMenu();

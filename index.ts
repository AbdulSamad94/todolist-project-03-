#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let cond = true;

while(cond){

  let answer = await inquirer.prompt([
    {
    name : "todo",
    type : "input",
    message : "What do you want to add in your Todos"
  },

  {
    name : "addMoreWork",
    type : "confirm",
    message : "If you want to add more press (y)",
    default : false
  }

])
let {todo,addMoreWork} = answer
cond = addMoreWork

if(todo){
    todos.push(todo)
}
else{
    console.log("Kindly add valid input")
}
}
if (todos.length > 0){
    console.log("Your today's works are :")
      todos.forEach(todo => {
        console.log(todo)
     });
}
else {
    console.log("No todos found")
}
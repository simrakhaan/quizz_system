import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgBlue("<<<<<<<<<<<<<<<<< hello >>>>>>>>>>>>>>>>>"));
console.log(chalk.greenBright("<<<<<<<<<<<< lets check your IQ>>>>>>>>>>>>"));
const selection = await inquirer.prompt({
    name: "chose",
    message: "which topic you want to select",
    type: "list",
    choices: ["PROGRAMING", "GERNAL KNOWLADGE", "ISLAMIC"]
});
// IF USER CHOSE  THE PROGRAMING //
if (selection.chose === "PROGRAMING") {
    console.log("question1");
    // FOR SELECT PROGRAMING //
    /////   Q1     ///////////
    let question1 = await inquirer.prompt({
        name: "q1",
        message: "which of the following is a statically typed language",
        type: "list",
        choices: ["Java", "Python", "C++", "JavaScript"]
    });
    if (question1.q1 === "Java") {
        console.log(chalk.red("your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer is wrong :  JAVA"));
    }
    ////////// Q2 //////////
    let question2 = await inquirer.prompt({
        name: "q2",
        message: "what does HTML stand for",
        type: "list",
        choices: ["HyperLink and Text Markup Language", "Hyper Text MarkUp Language", " Home Tool Markup Language", "HyperLink and Text Managment Language"]
    });
    if (question2.q2 === "Hyper Text MarkUp Language") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : HYPER TEXT MARKUP LANGUAGE"));
    }
    ;
    //////////Q3/////////////
    let question3 = await inquirer.prompt({
        name: "q3",
        message: "which programing language is often is usesd for web development",
        type: "list",
        choices: ["javaScript", "python", "java", "html"]
    });
    if (question3.q3 === "javaScript") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : JAVASCRIPT"));
    }
    ;
    //////////Q4/////////////
    let question4 = await inquirer.prompt({
        name: "q4",
        message: "which key word is used for decleard value",
        type: "list",
        choices: ["let", "python", "var", "const"]
    });
    if (question4.q4 === "var") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : VAR"));
    }
}
///////IF USERE CHOSE GENERAL KNOWLADGE/////////
else if (selection.chose === "GERNAL KNOWLADGE") {
    console.log("question1");
    //////////Q1/////////
    let question1 = await inquirer.prompt({
        name: "q1",
        message: "what is the largest organ in human body",
        type: "list",
        choices: ["liver", "brain", "skin", "heart"]
    });
    if (question1.q1 === "skin") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : SKIN "));
    }
    //////////Q2/////////
    let question2 = await inquirer.prompt({
        name: "q2",
        message: "which planet is known as RED PLANET",
        type: "list",
        choices: ["setrum", "sun", "jupitar", "mars"]
    });
    if (question2.q2 === "mars") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : MARS "));
    }
    ;
    /////////Q3/////////
    let question3 = await inquirer.prompt({
        name: "q3",
        message: "whatis the chemical formula of WATER",
        type: "list",
        choices: ["H2O", "O2", "CO2", "NaCl"]
    });
    if (question3.q3 === "H2O") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : H2O "));
    }
    ;
    /////////Q4/////////
    let question4 = await inquirer.prompt({
        name: "q4",
        message: "what is the tallest mammal in the world",
        type: "list",
        choices: ["hippopotamus", "elephant", "giraffe", "rhino"]
    });
    if (question4.q4 === "giraffe") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : GIRAFFE "));
    }
    ;
}
////////////IF A USER CHOSE ISLAMIC/////////////
else {
    selection.chose === "ISLAMIC";
    console.log("question1");
    ////////Q1///////////
    let question1 = await inquirer.prompt({
        name: "q1",
        message: "who is considerd the last prophet of islam",
        type: "list",
        choices: ["moses", "jesus", "hazrat muhammad", "abraha"]
    });
    if (question1.q1 === "hazrat muhammad") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : HAZRAT MUHAMMAD "));
    }
    ;
    /////////Q2///////////
    let question2 = await inquirer.prompt({
        name: "q2",
        message: "what is the name of the ISLAMIC holy book",
        type: "list",
        choices: ["torah", "bible", "quran", "vedas"]
    });
    if (question2.q2 === "quran") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : QURAN"));
    }
    ;
    /////////Q3///////////
    let question3 = await inquirer.prompt({
        name: "q3",
        message: "what isthe arabic term of GOD in islam",
        type: "list",
        choices: ["Allah", "jehova", "rama", "yahweh"]
    });
    if (question3.q3 === "Allah") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : ALLAH "));
    }
    ;
    ////Q4///////////
    let question4 = await inquirer.prompt({
        name: "q4",
        message: "what is the meaning of IQRA in quran",
        type: "list",
        choices: ["likhna", "parhna", "sunna", "dekhna"]
    });
    if (question4.q4 === "parhna") {
        console.log(chalk.red(" your answer is right !"));
    }
    else {
        console.log(chalk.yellow("your answer  is wrong : PARHNA "));
    }
    ;
}

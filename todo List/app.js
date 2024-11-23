
// let menu = prompt("What would you like to do?")
// const toDo = ["clean room", "read book"];


// while (menu !== "quit" && menu !== "q") {
//     if (menu === "new") {
//         const addNew = prompt("Add new todo")
//         toDo.push(addNew)
//         console.log(`You've added a new todo: ${addNew}`)
//         menu = prompt("What would you like to do?")
//     }
//     else if (menu === "delete") {
//         const deleteToDo = parseInt(prompt("Delete todo"))
//         toDo.splice(deleteToDo,1);
//         console.log(`You've deleted a todo: ` + toDo[deleteToDo])
//         menu = prompt("What would you like to do?")
//     }

//     else if (menu === "list") {
//         console.log("--------LIST---------")
//         for (let i = 0; i < toDo.length; i++) {
//             console.log(i + ":" + toDo[i])
//         }
//     }        menu = prompt("What would you like to do?")


// }
// console.log("You have quit the app");


const outputDiv = document.getElementById('output');
const input = document.getElementById('command');
const runButton = document.getElementById('run');
let todoList = [];

// Function to add output to the console
function addOutput(text, color) {
    const div = document.createElement('div');
    div.textContent = text;
    div.style.color = color;
    outputDiv.appendChild(div);
    outputDiv.scrollTop = outputDiv.scrollHeight; // Auto-scroll

}
const viewList = () => {
    todoList.forEach((task, index) => addOutput(`> ${index + 1}. ${task}`));
};
//Welcome message
addOutput(`> Welcome to a very simple todo list`, 'chartreuse');
addOutput(`> Please follow the instructions to begin`, 'chartreuse');

// Execute code and handle errors
runButton.addEventListener('click', () => {
    const userInput = input.value;
    input.value = ''; // Clear the input field
    if (userInput.trim() === '') return;

    const [command, ...args] = userInput.split(' ');
    const task = args.join(' ');

    switch (command.toLowerCase()) {
        case '-n':
            if (task) {
                todoList.push(task);
                addOutput(`> ${task}`)
                addOutput(`> Added: ${task}`, 'chartreuse');
            } else {
                addOutput(`> ${task}`)
                addOutput('> Please specify a task to add')
            }
            break;
        case '-r':
            const indexToRemove = parseInt(task) - 1;
            if (!isNaN(indexToRemove) && todoList[indexToRemove]) {
                todoList.splice(indexToRemove, 1);
                addOutput(`> removed task number ${task} from todo list!`,'orange')
            } else {
                addOutput(`> ${task}`)
                addOutput('> Invalid todo. Please input a number.', 'red')
            }
            break;
        case '-v':
            addOutput("------------------LIST-------------------")
            viewList();
            break;
        default:
            addOutput(`> ${command}`)
            addOutput('> Invalid command. Use -n, -r, -v.', 'red');

    }



});

// Allow pressing Enter to run commands
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        runButton.click();
    }
});
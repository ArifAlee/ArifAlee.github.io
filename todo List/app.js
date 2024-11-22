
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
const commandInput = document.getElementById('command');
const runButton = document.getElementById('run');

// Function to add output to the console
function addOutput(text) {
    const div = document.createElement('div');
    div.textContent = text;
    outputDiv.appendChild(div);
    outputDiv.scrollTop = outputDiv.scrollHeight; // Auto-scroll

    const list = [];
    (text) => {
        if (text === "new"){
            
        }
    }
}

// Execute code and handle errors
runButton.addEventListener('click', () => {
    const command = commandInput.value;
    commandInput.value = ''; // Clear the input field
    if (command.trim() === '') return;

    // Display the command
    addOutput(`> ${command}`);

});

// Allow pressing Enter to run commands
commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        runButton.click();
    }
});





// Function to reset visited links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        // Append a random query parameter to each link to prevent it from being marked as visited
        const url = new URL(link.href);
        url.searchParams.set("nocache", Math.random().toString(36).substring(2, 10));
        link.href = url.toString();
    });
});


const outputDiv = document.getElementById('output');
const commandInput = document.getElementById('command');
const runButton = document.getElementById('run');
// Function to add output to the console
function addOutput(text) {
    const div = document.createElement('div');
    div.textContent = text;
    div.style.color = text.startsWith('Error:') ? 'red' : 'lightgreen';
    outputDiv.appendChild(div);
    outputDiv.scrollTop = outputDiv.scrollHeight; // Auto-scroll
}

// Execute code and handle errors
runButton.addEventListener('click', () => {
    const command = commandInput.value;
    commandInput.value = ''; // Clear the input field
    if (command.trim() === '') return;

    // Display the command
    addOutput(`> ${command}`);
    
    // Try to execute the command
    try {
        const result = eval(command);
        addOutput(result === undefined ? 'undefined' : result);
    } catch (error) {
        addOutput(`Error: ${error.message}`);
    }
});

// Allow pressing Enter to run commands
commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        runButton.click();
    }
});
const output = document.getElementById('output');
const input = document.getElementById('input');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const command = input.value.trim();
    executeCommand(command);
    input.value = '';
  }
});

function executeCommand(command) {
  if (command === 'help') {
    appendOutput("Available commands: help, echo, clear");
  } else if (command.startsWith('echo ')) {
    appendOutput(command.slice(5));
  } else if (command === 'clear') {
    output.innerHTML = '';
  } else {
    appendOutput(`Unknown command: ${command}`);
  }
}

function appendOutput(text) {
  output.innerHTML += text + '\n';
  output.scrollTop = output.scrollHeight;
}

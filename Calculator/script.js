const display = document.getElementById("user-input");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let resultShown = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            currentInput = "";
            display.value = "0";
        } else if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || "0";
        } else if (value === "=") {
            try {
                const output = eval(currentInput.replace('%', '/100'));
                display.value = output;
                currentInput = output.toString();
                resultShown = true;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        } else {
            // If result was just shown and a number is clicked, start new input
            if (resultShown && /[0-9.]/.test(value)) {
                currentInput = value;
                resultShown = false;
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    });
});

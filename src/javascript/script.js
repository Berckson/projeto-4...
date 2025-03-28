
const whiteGray = '#f1f5f9'
const blackGray = '#212529'

function useLightTheme() {
    document.body.style.backgroundColor = whiteGray
    document.body.style.color = blackGray
}

function useDarkTheme() {
    document.body.style.backgroundColor = blackGray
    document.body.style.color = whiteGray
}

function switchTheme(){

document.body.classList.toggle('is-light')
document.body.classList.toggle('is-dark')

}

document.getElementById('switchBtn').addEventListener('click',switchTheme)






// exemplo de codigo chat gpt

*document.addEventListener("DOMContentLoaded", function() {
    let expression = "";
    const resultDisplay = document.querySelector(".borda");

    // Function to update display
    function updateDisplay() {
        resultDisplay.innerText = expression || "0";
    }

    // Attach event listeners to buttons
    document.querySelectorAll("td").forEach(button => {
        button.addEventListener("click", function() {
            const id = this.id;

            if (id === "limpar") {
                expression = ""; // Clear everything
            } else if (id === "resultado") {
                try {
                    expression = eval(expression); // Evaluate expression
                } catch (error) {
                    expression = "Error"; // Handle invalid expressions
                }
            } else {
                const value = this.innerText;
                expression += value; // Append button value to expression
            }
            updateDisplay();
        });
    });

    updateDisplay(); // Initial display setup
});

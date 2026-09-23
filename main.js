const calculation = document.getElementById('expression')
const result = document.getElementById ('result')

let display = ""

function appendDisplay (input){
    display += input
    calculation.textContent = display

}

function clearDisplay(){
    display = "";
    calculation.textContent = "";
    result.textContent = "0";

}

function calculate(){
    result.textContent = eval(display)
}

function backspace(){
    display = display.slice(0, -1)
    calculation.textContent = display
}

function changeSign(){
    display = display * -1
    calculation.textContent = display;
}
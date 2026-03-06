let output = document.getElementById('output');

function addInput(input){
    output.value += input;
}

function clearInput(input){
    output.value = "";
}

function total(){
    output.value = (eval(output.value));
}
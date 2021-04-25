const textContainer = document.querySelector(".text-container");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const input = document.querySelector(".input");

let speed = 1;
let realSpeed = 5000 / speed;
let currentTextIndex = 0;
let innerTextIndex = 0;
let textArray = ["HTML","CSS","Bootstrap","Javascript","Angular"];

increment.addEventListener("click", (e) => {
    speed ++;
    if(speed > 5){
        speed = 5;
    }
    input.value = speed;
    realSpeed = 5000 / speed;
    e.preventDefault();
})

decrement.addEventListener("click", (e) => {
    speed --;
    if(speed < 1){
        speed = 1;
    }
    input.value = speed;
    realSpeed = 5000 / speed;
    e.preventDefault();
})

function getText(){
    let text = textArray[currentTextIndex];
    currentTextIndex ++;
    if(textArray.length == currentTextIndex){currentTextIndex = 0}
    return `${text}`;
}

function chooseText(){
    let text = getText();
    autoText(text);
}

function autoText(text){
    textContainer.innerHTML = text.slice(0,innerTextIndex + 1);
    setTimeout(() => {
        innerTextIndex ++;
        if(innerTextIndex < text.length){
            autoText(text);
        }else{
            innerTextIndex = 0;
            chooseText();
        }

    }, realSpeed / text.length);
}

chooseText();
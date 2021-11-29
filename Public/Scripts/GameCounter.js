let btnAdd1 = document.getElementById("Btn-add-1");
let btnSub1 = document.getElementById("Btn-subtract-1");
let btnAdd2 = document.getElementById("Btn-add-2");
let btnSub2 = document.getElementById("Btn-subtract-2");
let counter1 = document.getElementById("counter1")
let number1 = 0;
let number2 = 0;
btnAdd1.addEventListener("click",addPoint1)
btnSub1.addEventListener("click",subPoint1)

btnAdd2.addEventListener("click",addPoint2)
btnSub2.addEventListener("click",subPoint2)

counter1.innerHTML = number1;
counter2.innerHTML = number2;


function addPoint1(){
    counter1.innerHTML = ++number1;
    setRandomPicture()
}

function subPoint1(){
    counter1.innerHTML = --number1;
}

function addPoint2(){
    counter2.innerHTML = ++number2;
}

function subPoint2(){
    counter2.innerHTML = --number2;
}

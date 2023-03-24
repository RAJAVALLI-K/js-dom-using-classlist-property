let containerDiv = document.querySelector('.container');
//toggle classlist
function myFunctionTog() {
    let toggle = document.querySelector("#main1");
    toggle.classList.toggle("myStyle");
}

//add classlist
function myFunction() {
    let add = document.querySelector(".main");
    add.classList.add("myStyle1");
}

//remove classlist
function myFunctionRem() {
    let remove = document.querySelector("#main");
    remove.classList.remove("myStyle2");
}

//length classlist
const list = document.querySelector("#demo").classList;
let number = list.length;
document.querySelector("#demo").innerText = number;

//item classlist
const list1 = document.querySelector("#demo").classList;
let item = list1.item(0);
document.querySelector("#demo1").innerText = item;


// classlist define:::The classList property returns the CSS classnames of an element.
//                    The classList property returns a DOMTokenList.



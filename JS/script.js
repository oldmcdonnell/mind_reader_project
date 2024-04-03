//document.body.onload = addBodyText;
let btn = document.getElementById("dynamicButton");
let btn2 = document.getElementById("standardNext")

let pageNum = 0;

function pageTurnOrReset(){
if (pageNum = 0){
    pageNum++
} else {
    pageNum = 0
}
}

function stdNextFunction(){
    if (pageNum<4 && pageNum > 1) {
        pageNum++
    }
}


const textArr = ['page 1', 'page2', 'page3']

function currentPage(){
    if (nextPage){
    }
}

function addBodyText() {
document.getElementById("javascriptText").textContent = "hello world"

}

btn.addEventListener("click", pageTurnOrReset);
btn2.addEventListener("click", stdNextFunction);
addBodyText();

/*-
function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    //document.body.insertBefore(newDiv, currentDiv);
    document.body.appendChild(newDiv, currentDiv);
}
-*/
/*-
function initJs() {
    let firstDiv = document.createElement("div");
    firstDiv.innerHTML = '<div>Test inner HTML</div>';
}
-*/
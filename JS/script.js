//document.body.onload = addBodyText;
let btn = document.getElementById("dynamicButton");
let btn2 = document.getElementById("standardNext")
let textForPage = document.getElementById("javascriptText")


let pageNum = 0;

let reloadBtn = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrstrinow-counterclockwise" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/></svg>`

function pageTurnOrReset(){
console.log('dynamic next page')
    if (pageNum === 0){
        pageNum++
        btn.innerHTML = reloadBtn;
        btn2.innerHTML = "Next"
        btn2.className = "nextBtn"
        addBodyText();

    } else {
        pageNum = 0
        btn2.innerHTML = "";
        btn2.className = "nextBtnClear"
        addBodyText()
}
console.log('click')
}

function stdNextFunction(){
    console.log(textArr[pageNum])
    if (pageNum >= 1 && pageNum < 4) {
        btn.innerHTML = reloadBtn;
        btn2.innerHTML = "Next";
        btn2.className = "nextBtn";
        pageNum++
        addBodyText();
        console.log('standard next')
    } els
}


const textArr = ['This is the first page, page 1', 'page2', 'page3', 'page4']

function currentPage(){
    if (nextPage){
    }
}

function addBodyText() {
    textForPage.textContent = textArr[pageNum]
    console.log("add body text", pageNum, textArr[pageNum])
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
//document.body.onload = addBodyText;
let btn = document.getElementById("dynamicButton");
let btn2 = document.getElementById("standardNext")
let textForPage = document.getElementById("javascriptText")
let textForBottom = document.getElementById("bottomText")
let textForSymbols = document.getElementById('symbolText')
let goClass = "btn btn-info p-3 rounded-circle btn-lg"

let pageNum = 0;

let reloadBtn = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrstrinow-counterclockwise" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/></svg>`



function addSymbolText(){
    let symbolElement = '' 
    
    for (let i =0; i < 100; i++){
        symbolElement = document.createElement('div')
        symbolElement.innerHTML = symbolList[i]
        textForSymbols.appendChild(symbolElement)
        console.log("add symbol text")
    }   
}
    

function pageTurnOrReset(){
    if (pageNum === 0){
        pageNum++
        btn.innerHTML = reloadBtn;
        btn2.textContent = "Next"
        btn2.classList.add("nextBtn")
        btn2.classList.remove("nextBtnClear")
        addBodyText();
        console.log("go")

    } else {
        pageNum = 0
        btn.textContent = "GO"
        btn.className = goClass
        btn2.textContent = "";
        btn2.classList.add("nextBtnClear")
        addBodyText()
        console.log("reset")
}
console.log('click', pageNum)
}

function stdNextFunction(){
    if (pageNum >= 1 && pageNum < 3) {
        btn.innerHTML = reloadBtn;
        btn2.textContent = "Next";
 //       btn2.className = "nextBtn";
        pageNum++
        addBodyText();
    } else if (pageNum === 3){
        btn2.textContent = "reveal";
//        btn2.className = "nextBtn";
        console.log("reveal")
        addSymbolText()
        textForPage.textContent = "Find Your Number"
        textForBottom.textContent=" "
        pageNum++
        //addBodyText();
    } else if (pageNum === 4) {
        btn2.textContent = "";
//        btn2.className = "nextBtnClear";
        btn2.classList.add("nextBtnClear")
        textForSymbols.textContent = " "
        textForBottom.textContent= "Your Symbol is ♥"
        addBodyText();
    }
    console.log(pageNum)
    console.log(textArr[pageNum])
}


const symbolList = ['1 - ☠', '2 - ☮', '3 - ☯', '4 - ♠', '5 - Ω', '6 - ♤', '7 - ♣', 
'8 - ♧', '9 - ♥', '10 - ♡', '10 - ♦', '11 - ♢', '12 - ♔', '13 - ♕', '14 - ♚', '15 - ♛', 
'16 - ⚜', '17 - ★', '18 - ♥', '19 - ✮', '20 - ✯', '21 - ☄', '22 - ☾', '23 - ☽', '24 - ☼', 
'25 - ☀', '26 - ☁', '27 - ♥', '28 - ☃', '29 - ☻', '30 - ☺', '31 - ☹', '32 - ۞', '33 - ۩', 
'34 - ☠', '35 - ☮', '36 - ♥', '37 - ♠', '38 - Ω', '39 - ♤', '40 - ♣', '41 - ♧', '42 - ♥', 
'43 - ♡', '44 - ♦', '45 - ♥', '46 - ♔', '47 - ♕', '48 - ♚', '49 - ♛', '50 - ⚜', '51 - ★',
 '52 - ♥', '53 - ✮', '54 - ♥', '55 - ☄', '56 - ☾', '57 - ☽', '58 - ☼', '59 - ☀', '60 - ☁', 
 '61 - ⚜', '62 - ☃', '63 - ♥', '64 - ☺', '65 - ☹', '66 - ۞', '67 - ۩', '68 - ☮', '69 - ☯', 
 '70 - ♠', '71 - Ω', '72 - ♥', '73 - ♣', '74 - ♧', '75 - ♥', '76 - ♡', '77 - ♦', '78 - ♢', '79 - ♔',
  '80 - ♕', '81 - ♥', '82 - ♛', '83 - ⚜', '84 - ★', '85 - ♥', '86 - ✮', '87 - ✯', '88 - ☄', '89 - ☾',
   '90 - ♥', '91 - ☼', '92 - ☀', '93 - ☁', '94 - ♥', '95 - ☃', '96 - ☻', '97 - ☺', '98 - ☹', '99 - ۞']
const printArray = []
const numArry = []

const textArr = ['I can read your mind', 'Pick a number between 01-99', 'Add both numbers together to get a new number', 'Subtract your new number from the original number', '♥']
const bottomArr = [' ','when you have your number click next', 'Ex: 14 is 1 + 4 =5 click next to proceed', 'Subtract your number number from your original number', 'your symbol is  ♥']

function addBodyText() {
    textForPage.textContent = textArr[pageNum]
    //console.log("add body text", pageNum, textArr[pageNum])
    textForBottom.textContent = bottomArr[pageNum]
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
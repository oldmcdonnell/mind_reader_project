document.body.onload = addElement;
let btn = document.getElementById("nextPage");


function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }

function initJs() {
    let firstDiv = document.createElement("div");
    firstDiv.innerHTML = '
    <div class="w-50 p-3 mx-auto bg-success">Test inner HTML</div>
    ';
}
// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
    console.log(document.getElementsByTagName("div")[0].innerHTML)
// 2. Using getElementById change the text of #my-p to "Hello DOM".
    document.getElementById("my-p").innerText = "Hello DOM"
// 3. Use querySelector to select the element with class "target-div" and log its nodeName.
    console.log(document.querySelector(".target-div").nodeName)
// 4. Use querySelectorAll to count how many <div> elements exist; log the count.
    console.log(document.querySelectorAll("div").length)
// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".
    document.getElementsByName("user-email")[0].value = "user@test.com"
// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
    if(!document.querySelector("[type = text]").hasAttribute("name")){
        document.querySelector("[type = text]").setAttribute("name", "user-name")
    }
// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).
    document.getElementById("my-p").innerText = document.getElementById("my-p").innerText + "- UPDATED"
// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.

// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.
    document.querySelector("[type = text]").setAttribute("placeholder","Type your full name")
// 10. Log whether the email input has attribute "required"; if missing add it.
if(!document.querySelector("[type = email]").hasAttribute("required")){
        document.querySelector("[type = email]").setAttribute("required", "")
    }
// 11. Write function getSelectedValue(selectId) returning the current selected option value.
    function getSelectedValue(selectId){
             return  document.getElementById(selectId).options[document.getElementById(selectId).selectedIndex].value; 
          }
          console.log(getSelectedValue("my-select"))
// 12. Loop through all options of the select and log each option's text and value.
    select = document.getElementsByTagName("select")[0]
    for(var i =0;i<select.length;i++){
        console.log(select.options[i].innerText)
        console.log(select.options[i].value)

    }
// 13. Programmatically select the option with value "EG".
    select.options.value = "EG"
// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
    function selectByText(selectId, text){
          select1 = document.getElementById(selectId);
       for(var i =0;i<select1.length;i++){
        if(select1.options[i].innerText === text){
                select1.selectedIndex = i;
                console.log(select1.selectedIndex)
                break;
            }
        }
    }
    selectByText("my-select", "Egypt");
// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
    document.getElementById("div-2").innerHTML = "<p><b>Bold Text</b></p>"
// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).
    document.getElementById("div-2").classList.add("class-a","class-b")       
    document.getElementById("div-2").classList.remove("class-b")
// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.
    document.getElementById("div-2").classList.toggle("hidden")
    document.getElementById("div-2").classList.toggle("hidden")
    // the div is visiable
// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.
    function insertAfter(refNode, newNode){
        prnt = document.getElementById(refNode).parentNode
        rNode = document.getElementById(refNode)
        prnt.insertBefore(newNode, rNode.nextSibling)
    }
    var nNode = document.createElement("p")
    nNode.textContent = "Hello Kareem"
    nNode.setAttribute("id" , "myNewP")
    insertAfter("my-p",nNode)
// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
    let newDiv = document.createElement("div"); 
    newDiv.classList.add("class-a"); 
    newDiv.innerHTML = "<p>Dynamic Box</p>"; 
    document.getElementById("div-2").append(newDiv)
// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
div2 = document.getElementById("div-2")
first = div2.firstChild
console.log(first)
newP = document.createElement("p")
newP.innerText = "new pargraph"
div2.insertBefore(newP, first.nextSibling);
// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
document.getElementById("div-2").insertAdjacentHTML("afterend", "<span>AFTER END</span>")
// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
document.getElementsByTagName("form")[0].onsubmit = function(e){
    e.preventDefault();
    console.log(document.querySelector("[type = text]").value)
    console.log(document.querySelector("[type = email]").value)
    console.log(document.getElementById("my-select").value)
}
// 23. Add input event on the text input that logs its length whenever it changes.
document.querySelector("[type = text]").addEventListener("input", function(){
    console.log(this.value.length)
})

// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
function validateEmailSimple(value){
    return value.includes("@") && value.includes(".")
}
console.log(validateEmailSimple("user@test.com")) // true
console.log(validateEmailSimple("user.com")) // false
console.log(validateEmailSimple("user@domain")) // false
console.log(validateEmailSimple("user@domain.com")) // false
// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).
let anotherDiv = document.createElement("div"); 
anotherDiv.innerHTML = "<p>Another Div</p>";
document.getElementById("div-2").append(anotherDiv)
document.getElementById("div-2").removeChild(anotherDiv)

// 25. Create an element, append it to <div id="wrapper">
//   <p id="first">First</p>
//   <p id="second">Second</p>
// </div>
let wrapperDiv = document.createElement("div"); 
wrapperDiv.setAttribute("id", "wrapper");
wrapperDiv.innerHTML = `<p id="first">First</p>
<p id="second">Second</p>`;
document.body.append(wrapperDiv)

// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.
let cloneDiv = document.getElementById("div-2").cloneNode(true);
cloneDiv.setAttribute("id", "div-2-clone");
insertAfter("div-2", cloneDiv);
// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.
function highlightInputs(form){
    inputs = form.querySelectorAll("input[type='text'], input[type='email']");
    inputs.forEach(input => {
        input.style.border = "2px solid green";
    });
}
document.addEventListener("DOMContentLoaded", function(){
    highlightInputs(document.getElementsByTagName("form")[0]);})
// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.
function buildCard(title, content){
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    let h3 = document.createElement("h3");
    h3.innerText = title;
    let p = document.createElement("p");
    p.innerText = content;
    cardDiv.appendChild(h3);
    cardDiv.appendChild(p);
    return cardDiv;
}
document.body.appendChild(buildCard("Card 1", "This is the first card."));
document.body.appendChild(buildCard("Card 2", "This is the second card."));

// 29. Add delegated click listener on body logging when a .card is clicked.
document.body.addEventListener("click", function(e){
    if(e.target.closest(".card")){
        console.log("Card clicked:", e.target.closest(".card").querySelector("h3").innerText);
    }
});

// 30. Reflection (comment): Which two tasks were most challenging and why?
//  (28) as it required creating multiple elements and ensuring proper structure and styling
// (27) because it involved understanding event listeners and DOMContentLoaded event
// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-
let ul = document.createElement("ul");
for(let i = 1; i <= 10; i++){
    let li = document.createElement("li");
    li.innerText = "Item " + i;
    if(i % 2 === 0){
        li.classList.add("even");
    } else {
        li.classList.add("odd");
    }
    ul.appendChild(li);
}
document.body.appendChild(ul);
// Insert Copyright Text in Footer
let footer = document.getElementsByClassName("footer")[0];

const thisYear = new Date().getFullYear(); 
const copyrightText =  "I turn coffee☕️ into code. \u00A9 " + "Tetiana Klitna " + thisYear;

footerText = document.createElement("p");
footerText.innerText = copyrightText;
footer.append(footerText);

const today = (new Date()).toLocaleDateString();
footerText = document.createElement("p");
footerText.innerText = "Today is " + today;
footer.append(footerText);

//Create List of Skills
let skills = ["HTML", "CSS", "JavaScript", "Java", "Oracle", "Python"];
let ulItem  = document.getElementById("skills").querySelector("ul");
ulItem.style.listStyle = "none";

let i = 0;
for(let i = 0; i < skills.length; i++){
    const titleItem = document.createElement("li");
    titleItem.textContent = skills[i]; 
    ulItem.append(titleItem);
}
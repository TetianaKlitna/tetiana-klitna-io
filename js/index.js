// Insert Copyright Text in Footer
const footerText = document.createElement("p");
const thisYear = new Date().getFullYear(); 
footerText.innerText =  "\u00A9 " + "Tetiana Klitna " + thisYear;

let footer = document.getElementsByClassName("footer")[0];
footer.append(footerText);

//Create List of Skills
let skills = ["HTML", "CSS", "JavaScript", "Java", "Oracle", "Python"];
let skillItems  = document.getElementsByClassName("img-item");
console.log(skillItems);

let i = 0;
for(let i = 0; i < skillItems.length && i < skills.length; i++){
    const titleItem = document.createElement("p");
    titleItem.textContent = skills[i]; 
    skillItems[i].append(titleItem);
}
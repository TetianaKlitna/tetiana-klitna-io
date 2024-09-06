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

// Handle Message Form Submit
const messageForm = document.forms['leave_message'];
messageForm.addEventListener("submit", 
    event => {
        
        event.preventDefault();

        let name = event.target.usersName.value;
        let email = event.target.usersEmail.value;
        let message = event.target.usersMessage.value;
        console.log(`${name} ${email} ${message}`);
        event.target.reset();

        // Display Messages in List
        const messageSection = document.getElementById("messages");
        let messageList = messageSection.querySelector("ul");
        messageList.style.listStyle = 'none';
        let newMessage = document.createElement("li");

        let removeButton = document.createElement("button");
        removeButton.innerHTML = "<img class = 'btn-remove' src = 'img/remove_icon.png' alt = 'remove icon'/>";
        removeButton.type = "button";
        removeButton.addEventListener("click", 
            event => {
            let entry = event.target.closest("li");
            entry.remove();
            toggleMessagesSection(messageSection, messageList);
        });
        
        newMessage.innerHTML = `<a href='mailto:${email}'><strong>${name}</strong></a>:  <span> ${message} </span> `;
        newMessage.appendChild(removeButton);
        messageList.append(newMessage);
        toggleMessagesSection(messageSection, messageList);
    });

function toggleMessagesSection(messageSection, messageList) {
    // const messagesSection = document.getElementById("messages");
    // let messageList = messagesSection.querySelector("ul");
    //console.log(messageList.children.length);
    if (messageList.children.length > 0) {
        messageSection.style.display = 'block';
    } else {
        messageSection.style.display= 'none';
    }
}
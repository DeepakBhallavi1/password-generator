
const generateButton = document.querySelector(".gen-password-btn");

generateButton.addEventListener('click', (event) => {
    
    const password_field = document.querySelector(".input-field")
    const checkBoxData = document.querySelectorAll('input[type="checkbox"]:checked');

    const passwordBox = getItems(checkBoxData);
    if(passwordBox.length === 0){
        alert("select atleast one type!!!");
        return;
    }

    const password = generate_password(passwordBox, 8);
    qualityStatus(passwordBox);
    buttonAnimation(generateButton);

    password_field.value = password;
})

function generate_password(passwordBox, password_length){ 
    
    let password = "", n = passwordBox.length;
    for(let i=1; i<=password_length; i++){
        const ind = Math.floor((Math.random()) * n);
        password += (passwordBox[ind]());
    }
    return (password);
}

// function storing selected checkboxes
function getItems(checkBoxData){
    const items = [];
    for(let i=0; i<checkBoxData.length; i++){
        if(checkBoxData[i].value === "lowercase") items.push(lowercase);
        else if(checkBoxData[i].value === "uppercase") items.push(uppercase);
        else if(checkBoxData[i].value === "numbers") items.push(numbers);
        else if(checkBoxData[i].value === "special") items.push(special);
    }
    return items;
}

const _uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const _lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const _numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const _special = ["@", "#", "$", "&", "_", "."];

function lowercase(){
    const charIndex = Math.floor((Math.random()) * 26);
    return (_lowercase[charIndex]); 
}
function uppercase(){
    const charIndex = Math.floor((Math.random()) * 26);
    return (_uppercase[charIndex]); 
}
function numbers(){
    const numIndex = Math.floor((Math.random()) * 10);
    return (_numbers[numIndex]); 
}
function special(){
    const charIndex = Math.floor((Math.random()) * 6);
    return (_special[charIndex]); 
}
// function for implementing button animations
function buttonAnimation(activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 150);
}

// function for showing quality of password
function qualityStatus(passwordBox){

    const status = document.querySelector("#ps-status");
    const percent = document.querySelector(".quality-percent");
    percent.classList.remove("Weak"); percent.classList.remove("Good");
    percent.classList.remove("Better"); percent.classList.remove("Strong");

    let quality = 0;
    for(let i=0; i<passwordBox.length; i++){
        if(passwordBox[i] === lowercase) quality += 25;
        else if(passwordBox[i] === uppercase) quality += 25;
        else if(passwordBox[i] === numbers) quality += 25;
        else if(passwordBox[i] === special) quality += 50;
    }

    if(quality === 25){
        percent.classList.add("Weak");
        status.innerHTML = "Weak";
    } 
    else if(quality === 50){
        percent.classList.add("Good");
        status.innerHTML = "Good";
    } 
    else if(quality === 75){
        percent.classList.add("Better");
        status.innerHTML = "Better";
    } 
    else if(quality >= 100){
        percent.classList.add("Strong");
        status.innerHTML = "Strong";
    }

}







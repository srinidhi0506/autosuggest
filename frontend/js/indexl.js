console.log("JS Loaded");

let isMale = true;

const btn = document.getElementById("togglebtn");
const img = document.getElementById("userimg");
const name = document.getElementById("username");
const gender = document.getElementById("usergender");

btn.addEventListener("click", function () {
    if (isMale) {
        img.src = "../images/Jane - Copy.png";
        name.innerText = "Jane Doe";
        gender.innerText = "Female";
    } else {
        img.src = "../images/john.png";
        name.innerText = "John Doe";
        gender.innerText = "Male";
    }

    isMale = !isMale;
});
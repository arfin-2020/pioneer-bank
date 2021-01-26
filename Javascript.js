//loging button eventhandler
const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", function() {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transctionArea = document.getElementById("tranction-area");
        transctionArea.style.display = "block";
    })
    //deposit button eventhandler

const depositbtn = document.getElementsByClassName("btn");
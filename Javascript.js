//loging button eventhandler
const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transctionArea = document.getElementById("tranction-area");
    transctionArea.style.display = "block";
})

//deposit button eventhandler

const depositbtn = document.getElementById("addDeposit");
depositbtn.addEventListener("click", function() {
    const depositAmount = document.getElementById("depositAmount").value;
    // console.log(depositAmount);
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    console.log(currentDeposit);
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit;

})
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
    //এখানে কমেন্ট এ যে 2 লাইন আছে সেগুলো হচ্ছে নরমান এবং এই 2 টা লাইনে একই কাজ বলে ফাংশনে করেছি।

    // const depositAmount = document.getElementById("depositAmount").value;
    // // console.log(depositAmount);
    // const depositNumber = parseFloat(depositAmount);

    //এখানে কমেন্ট এ যে আটটা লাইন আছে সেগুলো হচ্ছে নরমান এবং এই ৮ টা লাইনে একই কাজ বলে ফাংশনে করেছি। 

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // // console.log(currentBalanceNumber);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    const depositNumber = getInputNumber("depositAmount"); //see in geInputNumber please for understand code
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
})

//Withdraw button eventhandler
const withdrawBtn = document.getElementById("addwithdraw"); //see in geInputNumber please for understand code

withdrawBtn.addEventListener("click", function() {
        // console.log("Withdraw Button is wroking");
        //এখানে কমেন্ট এ যে 2 লাইন আছে সেগুলো হচ্ছে নরমান এবং এই 2 টা লাইনে একই কাজ বলে ফাংশনে করেছি।
        // const withdrawAmount = document.getElementById("withdrawAmount").value;
        // const withdrawNumber = parseFloat(withdrawAmount);
        const withdrawNumber = getInputNumber("withdrawAmount");
        // console.log(withdrawNumber);
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);
        document.getElementById("withdrawAmount").value = "";
    })
    // Withdraw Button Handler Function Start
function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

// Deposit Button Handler Function Start
function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}
function reverseString(s){
    let final = "";
    for(let i = s.length-1; i >= 0; i--){
        final += s[i];
    }
    
    return final
}

function is_palindrome(n){
    const reversed = reverseString(n)

    for(let i = 0; i < n.length; i++){
        if (n[i] != reversed[i]){
            return false;
        }
    }

    return true;
}

function calculateTip(billT, tipT){
    let bill = parseFloat(billT.value)
    let tip = parseFloat(tipT.value)

    while (tip > 1){
        tip = tip/100.0
    }
    return String(bill + (bill*tip))


}



const reverseTag = document.getElementById("reverse")
const reverseOut = document.getElementById("revOutput")



reverseTag.addEventListener("input", () => 
    {reverseOut.textContent = reverseString(reverseTag.value)})


const paliTag = document.getElementById("pali")
const paliOut = document.getElementById("paliOutput")


paliTag.addEventListener("input", () => 
    {paliOut.textContent = is_palindrome(paliTag.value) ? "It is a palindrome" : "It is NOT a palindrome"})


const billTag = document.getElementById("bill")
const tipTag = document.getElementById("tip")
const tipOutput = document.getElementById("tipOutput")


document.getElementById("calculate").addEventListener("click", () =>
    {tipOutput.textContent = "Your total is $" + calculateTip(billTag, tipTag) + "." })
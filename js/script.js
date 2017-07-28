let intel = 0
let user = 0
const card = function(){
    let randomNum = Math.floor(Math.random() * (11 - 1 + 1)) + 1
    user += randomNum
    document.getElementById("messages").innerHTML = "you have : " + user + " points"
    console.log(user)
    countIntel()
}
function countIntel() {
    let randomNum = Math.floor(Math.random() * (11 - 1 + 1)) + 1
    intel += randomNum
    console.log(intel)
}
const pass = function(){
    if(intel + 1 > user){
        alert("You lose")
    }else{
        alert("Congratulations, you are the winner")
    }
    intel = 0
    user = 0
}
document.getElementById("pass").addEventListener("click", pass)
document.getElementById("getCard").addEventListener("click", card)

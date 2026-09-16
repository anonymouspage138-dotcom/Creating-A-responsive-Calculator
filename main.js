
function calculateAge(){
let user = document.getElementById("age-input").value
if (user === ""){
alert("the field is empty")
} else {
    let currentYear = new Date().getFullYear();
const birthYear = currentYear - user
document.getElementById("result").innerHTML = "Your were born in " + birthYear
}

}
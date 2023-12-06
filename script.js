// Input
document.getElementById("button").addEventListener("click", calculate);
function calculate() {
let css1 = +document.getElementById("css1").value;
let sp1 = +document.getElementById("sp1").value;
let sp2 = +document.getElementById("sp2").value;
let css2 = +document.getElementById("css2").value;
let pA = +document.getElementById("pA").value;
// Process


let grade = (css1 + css2 +sp1 + sp2 + pA) / 5;
console.log(grade);
//output
document.getElementById("finalGrade").innerHTML = grade;
}
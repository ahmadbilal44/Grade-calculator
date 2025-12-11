
function calculateGrade() {
    let s = parseFloat(document.getElementById("score").value);
    let t = parseFloat(document.getElementById("total").value);

    if (isNaN(s) || isNaN(t) || t <= 0) {
        document.getElementById("result").innerText = "Invalid input.";
        return;
    }

    let percentage = (s / t) * 100;
    document.getElementById("result").innerText = 
        "Percentage: " + percentage.toFixed(2) + "%";
}

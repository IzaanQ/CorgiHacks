document.getElementById("form1").onsubmit = function () {
    q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
    q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
    q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
    q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
    q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
    q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);
    q7 = parseInt(document.querySelector('input[name = "q7"]:checked').value);
    q8 = parseInt(document.querySelector('input[name = "q8"]:checked').value);
    q9 = parseInt(document.querySelector('input[name = "q9"]:checked').value);
    q10 = parseInt(document.querySelector('input[name = "q10"]:checked').value);

    result = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;

    document.getElementById("grade").innerHTML = result;

    if (result <= 30) { result2 = "You are hereby exiled from the corgidom. Pathetic. A corgi wouldn't even deign to vomit at your feet." };
    if (result > 30 && result <= 60) { result2 = "You are a corgi peasant. You are afforded the luxury of existing in the same breathing space as a corgi, but, like the height of the corgi, you're pretty low on the bar." };
    if (result > 60 && result <= 90) { result2 = "You are a loyal corgi subject. The royal court-gi thanks you for your excellency in service and admiration." };
    if (result == 100) { result2 = "Congratulations, you are an honorary corgi!" };
    document.getElementById("grade2").innerHTML = result2;

    return false; // required to not refresh the page; just leave this here
} //this ends the submit function

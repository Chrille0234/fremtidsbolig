setInterval(skiftTemp, 5000);

function skiftTemp() {
    let x = Math.floor(Math.random() * 20) + 10;

    
    if (x > 17){document.getElementById("temp").innerHTML = x + "°";}
    // sørger for at temperaturen er over 17 grader
    else{ x = x + 10; document.getElementById("temp").innerHTML = x + "°";}
}
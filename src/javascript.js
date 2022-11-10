setInterval(runAll, 5000);
function runAll(){
    skiftFugtighed();
    skiftTemp();
}


function skiftTemp() {
    let x = Math.floor(Math.random() * 20) + 10;

    
    if (x > 17){document.getElementById("temp").innerHTML = x + "°";}
    // sørger for at temperaturen er over 17 grader
    else{ x = x + 10; document.getElementById("temp").innerHTML = x + "°";}
}

function skiftFugtighed() {
    let x = Math.floor(Math.random() * 20) + 10;

    
    x = (x + 10)*2; 
    document.getElementById("fugtighed").innerHTML = x + "%";
}

function powerOff() {
    var color = document.getElementById("power")
    color.classList.toggle("internetstrømvarmegrøn");
    color.classList.toggle("internetstrømvarmerød");

    var text = document.getElementById("powerText")
    if (text.innerHTML === "tændt"){
        text.innerHTML = "slukket"
    }
    else{
        text.innerHTML = "tændt"
    }

  }
  function netOff() {
    var color = document.getElementById("net")
    color.classList.toggle("internetstrømvarmegrøn");
    color.classList.toggle("internetstrømvarmerød");

    var text = document.getElementById("netText")
    if (text.innerHTML === "tændt"){
        text.innerHTML = "slukket"
    }
    else{
        text.innerHTML = "tændt"
    }

  }
  function warmOff() {
    var color = document.getElementById("warm")
    color.classList.toggle("internetstrømvarmegrøn");
    color.classList.toggle("internetstrømvarmerød");

    var text = document.getElementById("warmText")
    if (text.innerHTML === "tændt"){
        text.innerHTML = "slukket"
    }
    else{
        text.innerHTML = "tændt"
    }

  }
  function doorLock() {
    var color = document.getElementById("door")
    color.classList.toggle("internetstrømvarmegrøn");
    color.classList.toggle("internetstrømvarmerød");

    var icon = document.getElementById("doorLock")
    icon.classList.toggle("fa-lock");
    icon.classList.toggle("fa-lock-open")

  }
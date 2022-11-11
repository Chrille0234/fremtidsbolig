setInterval(runAll, 3000);
function runAll(){
    skiftFugtighed();
    skiftTemp();
}


function skiftTemp() {
    let x = Math.floor(Math.random() * 20) + 10;
    var skala = document.getElementById("tempskala")
    var temp = document.getElementById("temp");
    var skalaWrapper = document.getElementById("skalaWrapper");

    
    if (x < 19){
        temp.innerHTML = x + "°";
        skala.innerHTML = "for lav"
        skalaWrapper.style.color = "blue"
    }
    else if(x > 19 && x < 22){
        temp.innerHTML = x + "°";
        skala.innerHTML = "ok"
        skalaWrapper.style.color = "yellow"
    }
    else if(x > 22 && x < 25) {
        temp.innerHTML = x + "°";
        skala.innerHTML = "god"
        skalaWrapper.style.color = "green"
    }
    else if(x > 25) {
        temp.innerHTML = x + "°";
        skala.innerHTML = "for varmt";
        skalaWrapper.style.color = "red"
    }


}

function skiftFugtighed() {
    let x = Math.floor(Math.random() * 20) + 10;
     x = (x + 10)*2; 
    var fugt = document.getElementById("fugtighed");
    var fugtskala = document.getElementById("fugtskala");
    var fugtWrapper = document.getElementById("fugtWrapper");
    
    if (x < 50){
        fugt.innerHTML = x + "%";
        fugtskala.innerHTML = "for lav"
        fugtWrapper.style.color = "red"

    }
    else if (x > 70){
        fugt.innerHTML = x + "%";
        fugtskala.innerHTML = "for høj"
        fugtWrapper.style.color = "red"
    }
    else{
        fugt.innerHTML = x + "%";
        fugtskala.innerHTML = "god"
        fugtWrapper.style.color = "green"
    }
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
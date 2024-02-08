document.getElementById("sub-btn").onclick = function () {

    var name1 = document.getElementById("name").value;
    document.getElementById("hiro-name").innerHTML = "Mr. " + name1;

}

document.getElementById("cansal-btn").onclick = function(){
    location.reload();
}

document.getElementById("gass-btn").onclick = function () {
    var g_number = Math.random();
    g_number = g_number * 10;
    g_number = Math.floor(g_number);


    gassEnterNumber = document.getElementById("gass-number").value;

    if (g_number == gassEnterNumber) {
        document.getElementById("win-bar").innerHTML = "You Win &#128536;";
        document.getElementById("win-box").style.backgroundColor = "#00FA9A";
        document.getElementById("img-cat").src = "04/1.png";
      
        // alert("hi");

    }
    else {
        // alert("huka " + g_number);
        document.getElementById("win-bar").innerHTML = "You Loss &#128530;  Number is "+ g_number ;
        document.getElementById("win-box").style.backgroundColor = "#E52B50";
        document.getElementById("img-cat").src = "04/3.png";

    }

}
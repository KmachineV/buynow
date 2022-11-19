
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


var x = setInterval(function() {


    var now = new Date().getTime();


    var distance = countDownDate - now;

    // Calculo de tiempo en dias, horas minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    //Inserta Html segun las variables de tiempo, esto se puede cambiar para trabajarlas independientes para mejor control del css
    document.getElementById("contador").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "EXPIRED";
    }
}, 1000);

function minus(){
    var str = document.getElementById("num");
    var number = parseInt(str.value)
    if(number == 1){
        str.value = number;
    }
    else{
        str.value = number-1;
    }
}

function plus(){
    var str = document.getElementById("num");
    var number = parseInt(str.value)
    if(number == 15){
        str.value = number;
    }
    else{
        str.value = number+1;
    }
}
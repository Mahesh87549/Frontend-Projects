function displayNumber(number){
    document.getElementById("screen").value+=number;
}

function cutDown(){
    var screenValue=document.getElementById("screen").value;
    var newScreenValue=screenValue.slice(0,-1);
    document.getElementById("screen").value=newScreenValue;
}

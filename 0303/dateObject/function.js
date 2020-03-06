window.setInterval(getMyTime,1000);

function getMyTime(){
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleString()
};

getMyTime();
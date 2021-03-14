$(document).ready(function(){
    //connect to the socket server.
    //document.domain：Returns the domain name of the document server
    //location.port：本地埠號
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/channel');
    var numbers_received = [];

    //receive details from server
    // 接收到前端訊息，回傳訊息，以及toggleAlert函式
    socket.on('notify', function(msg) {
        console.log(msg);
        toggleAlert();
    });
});

function toggleAlert(){
    $("#alertBox").fadeIn();
    closeSnoAlertBox();
}

// 三秒之後關閉alerbox
function closeSnoAlertBox(){
    window.setTimeout(function () {
        $("#alertBox").fadeOut(300)
    }, 3000);
}
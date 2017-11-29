var wsUri = "ws://icp-log.mybluemix.net/ws/log";
var output;

function init() {
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket() {
    websocket = new WebSocket(wsUri);

    websocket.onopen = function (evt) {
        onOpen(evt)
    };

    websocket.onmessage = function (evt) {
        onMessage(evt)
        console.log("onmessage");
        
    };

    websocket.onerror = function (evt) {
        onError(evt)
        console.log("onmessage2");
    };
}

function onOpen(evt) {
    $(".terminal").append("<p> >>>CONNECTED <p> ")
    $("#status-color").attr('class', 'statuscorAmarelo');

//    doSend("WebSocket rocks");
}

function onMessage(evt) {
    $("#status-name").text("Running")
    $("#status-color").attr('class', 'statuscorVerde');
    var x = JSON.parse(evt.data).message;
    
    $('.terminal').append("<p> >>>" + x + "<p>");
    console.log(x);

}

function onError(evt) {
    $("#status-name").text("Error Ocurred")
    $("#status-color").attr('class', 'statuscorVermelho');
    console.log("onmessage");
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message) {
    writeToScreen("SENT: " + message);
        console.log("onmessage");
    websocket.send(message);
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
        console.log("onmessage");
    output.appendChild(pre);
}

window.addEventListener("load", init, false);

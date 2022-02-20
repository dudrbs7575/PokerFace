const webSocketUri = "http://localhost:8080/socket";

const constraints = {
    video: true, audio : true
};

navigator.mediaDevices.getUserMedia(constraints).
then(function(stream) { /* use the stream */ })
    .catch(function(err) { /* handle the error */});

const pc_config = {
    iceServers: [
        // {
        //   urls: 'stun:[STUN_IP]:[PORT]',
        //   'credentials': '[YOR CREDENTIALS]',
        //   'username': '[USERNAME]'
        // },
        {
            urls: "stun:stun.l.google.com:19302",
        },
    ],
};

let pc = new RTCPeerConnection(pc_config);
let webSocket = new WebSocket(webSocketUri);

webSocket.onopen() = function() {

}
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

//웹 소켓 연결 수립 후 send메세지로 확인

//연결을 맺는것은 비동기 작업
//WebSocket 오브젝트를 생성하자마자 send()로 데이터 전송을 시도하는 것은 성공하지 않을 확률 존재
//연결이 수립된 이후에만 데이터를 전송하도록 하기 위해 onopen 핸들러 정의하고 이 위에서 작업.
webSocket.onopen() = function() {
    console.log("connected to the signaling server");

    webSocket.send("msg to the signaling server");

}

//signaling server로 메세지를 보내기 위함.
function send(msg) {
    webSocket.send(JSON.stringify(msg));
}

webSocket.onmessage = function(msg) {
    console.log(msg);
}

//exampleSocket.close(); web소켓 사용 마쳤을때 호출.
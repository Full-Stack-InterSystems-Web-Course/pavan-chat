const host = `127.0.0.1:57772`;
var str=`ws://${host}/chat/WebCourse.ChatWebSocket.cls`;
let ws = new WebSocket(str);
ws.addEventListener(`open`,()=>{
	console.log(`we are connected to the chat`);
});
ws.addEventListener(`error`,(err)=>{
	console.error(`connection error:`,err);
});
ws.addEventListener(`close`,(e)=>{
	console.log(`we are disconnected from the chat.`+e);
});
ws.addEventListener(`message`,({data})=>{
	console.log(`Data received from the server`,JSON.stringify(data));
});
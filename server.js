#!/usr/bin/node


const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 7017 });

wss.on('connection', (ws) => {
 	//ws.send('Welcome to the WebSocket server!!!!');
	ws.on('message', (message) => {
  		//ws.send('love<3');
		//
		//console.log('send: sos');
		console.log(message.toString('utf8'));
		wss.broadcast(message.toString('utf8'));	
		
		
	});
});

wss.broadcast = function broadcast(msg) {
	   console.log('!');
	   wss.clients.forEach(function each(client) {
		          client.send(msg);
		       });
};

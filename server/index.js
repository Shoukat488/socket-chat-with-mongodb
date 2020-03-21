const app = require('./app');
const http  = require('http');
const server = http.createServer(app);
const port = 3000;
const io = require('socket.io')(http);

io.on('connection',(socket)=>{
    console.log("socket is connected");
    socket.on('send message',)
})


server.listen(port,(error)=>{
    if(error)
    throw error
    else
    console.log("Connected")
})
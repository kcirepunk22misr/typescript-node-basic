import Server from "./server/server";
import bodyParser from 'body-parser';

const server = Server.instance;


// middleware
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

// Routes


// Start Server
server.start(() => {
    console.log('Servidor corriendo');
});
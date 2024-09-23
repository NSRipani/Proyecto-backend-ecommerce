import express from "express";
import router from "../New folder/src/routes/index.router.js";
import morgan from 'morgan'
import errorHandler from "./src/middleware/errorHandler.js";
import pathHandler from '../New folder/src/middlewares/pathHandler.js';

try {
    const server = express();
    const port = 8000;
    
    server.use(express.urlencoded({ extended: true }));
    
    server.use(express.json());
    
    server.use(morgan('dev'))
    
    server.use(router)
    
    server.use(errorHandler);
    server.use(pathHandler)
    
    const ready = () => console.log("server ready on port " + port);
    server.listen(port, ready);

} catch (error) {
    console.log(error)
} 
import express from 'express';

import gameController from '../controllers/game.Controller.js';


const gameRouter = express.Router();


gameRouter.get("/", gameController.findAll);
gameRouter.post("/", gameController.create);
    

export default gameRouter;
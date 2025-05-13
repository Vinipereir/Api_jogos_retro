import express from 'express';

import gameController from '../controllers/game.Controller.js';


const gameRouter = express.Router();


gameRouter.get("/", gameController.findAll);
    

export default gameRouter;
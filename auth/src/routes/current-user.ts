import express from "express";

<<<<<<< HEAD
import { currentUser } from "@krismat/common";
=======
import { currentUser } from "../middlewares/current-user";
>>>>>>> e5107c33b2aa679eb4620fcf30e31e3b33f63de2


const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {

  res.send({ currentUser: req.currentUser || null })

});

export { router as currentUserRouter };
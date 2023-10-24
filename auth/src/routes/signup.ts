import express, { Response, Request } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { BadRequestError, validateRequest } from "@krismat/common";

import { User } from "../models/user";
<<<<<<< HEAD


=======
import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middlewares/validate-request";
>>>>>>> e5107c33b2aa679eb4620fcf30e31e3b33f63de2


const router = express.Router();

router.post('/api/users/signup', [
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Password must be between 4 and 20 characters')
], validateRequest,
async (req: Request, res: Response) => {

  const { email, password } = req.body

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new BadRequestError('Email in use')
  }

  const user = User.build({ email, password });
  await user.save();

  //generate jwt
  const userJwt = jwt.sign({
    id: user.id,
    email: user.email
  }, process.env.JWT_KEY!);

  //store it on session object
  req.session = {
    jwt: userJwt
  };

  res.status(201).send(user);
});

export { router as signupRouter };
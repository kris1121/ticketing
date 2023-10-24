import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken"
<<<<<<< HEAD
import { validateRequest, BadRequestError } from "@krismat/common";

import { User } from "../models/user";
import { Password } from "../services/password";
=======

import { validateRequest } from "../middlewares/validate-request";
import { User } from "../models/user";
import { Password } from "../services/password";
import { BadRequestError } from "../errors/bad-request-error";
>>>>>>> e5107c33b2aa679eb4620fcf30e31e3b33f63de2

const router = express.Router();

router.post('/api/users/signin', [
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('You must supply a password')
], validateRequest,
  async (req: Request, res: Response) => {

    const { email, password } = req.body

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new BadRequestError('Invalid credentials')
    }

    const isMatchedPwd = await Password.compare(existingUser.password, password);

    if (!isMatchedPwd) {
      throw new BadRequestError('Invalid credentials')
    }

    //generate jwt
    const userJwt = jwt.sign({
      id: existingUser.id,
      email: existingUser.email
    }, process.env.JWT_KEY!);

    //store it on session object
    req.session = {
      jwt: userJwt
    };

    res.status(200).send(existingUser);
  });

export { router as signinRouter };
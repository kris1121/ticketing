import mongoose from "mongoose";

import { app } from "./app";


<<<<<<< HEAD
const start = async () => {
=======
const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: true
})
)

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
  throw new NotFoundError();
})
>>>>>>> e5107c33b2aa679eb4620fcf30e31e3b33f63de2

  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

<<<<<<< HEAD
  try {
    await mongoose.connect(process.env.MONGO_URI);
=======
const start = async () => {

  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
>>>>>>> e5107c33b2aa679eb4620fcf30e31e3b33f63de2
    console.log('Connected to MongoDb')
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log("listenning on 3000")
  })
}

start();
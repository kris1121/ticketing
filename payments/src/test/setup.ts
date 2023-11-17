import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import jwt from 'jsonwebtoken';

import { app } from '../app';

jest.mock('../nats-wrapper');

process.env.STRIPE_KEY ='sk_test_51OBxmUFpxAk9u3xwyfIHHHEpBi3rMRdOwPFEl0YDwuFgGf7Zav0yij0pINWt9Tfb3L3LmNmkUrYqklfTEMzBQphR00ApCE76rn'

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = 'asadsd';

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {

  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany();
  }
});


afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

export const signupHelper = (id?: string) => {
  //build a JWT payload. { id, email }
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com'
  }

  //create JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  //build session object. { jwt: MY_JWT}
  const session = { jwt: token };
  //turn that session into JSON
  const sessionJSON = JSON.stringify(session);
  //take JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString('base64')
  //return a string thats the cookie with the encoded data
  return [`session=${base64}`]
}
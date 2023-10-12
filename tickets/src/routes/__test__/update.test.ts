import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../../app';
import { signupHelper } from '../../test/setup';
import { Ticket } from '../../models/ticket';

it('returns a 404 if the provided id does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .set('Cookie', signupHelper())
    .send({
      title: 'kjhkshds',
      price: 10
    })
    .expect(404)
});

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .send({
      title: 'kjhkshds',
      price: 10
    })
    .expect(401)
});

it('returns a 401 if the user does not own the ticket', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .post('/api/tickets/')
    .set('Cookie', signupHelper())
    .send({
      title: 'concert',
      price: 50
    })
    .expect(201)

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', signupHelper())
    .send({
      title: 'Ballet',
      price: 100
    })
    .expect(401)
});

it('returns a 400 if the user provides an invalid title or price', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const cookie = signupHelper();

  const response = await request(app)
    .post('/api/tickets/')
    .set('Cookie', cookie)
    .send({
      title: 'concert',
      price: 50
    })
    .expect(201)

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({

      price: 10
    })
    .expect(400)

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: '',
    })
    .expect(400)
});

it('updates the ticket provided valid inputs', async () => {
  const cookie = signupHelper();

  const response = await request(app)
    .post('/api/tickets/')
    .set('Cookie', cookie)
    .send({
      title: 'concert',
      price: 50
    })
    .expect(201)
 
  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'Ballet',
      price: 100
    })
    .expect(200)

    const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200)

    expect(ticketResponse.body.title).toEqual('Ballet');
    expect(ticketResponse.body.price).toEqual(100);
});

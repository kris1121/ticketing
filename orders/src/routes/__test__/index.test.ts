import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../../app';
import { signupHelper } from '../../test/setup';
import { Ticket } from '../../models/ticket';

const buildTicket = async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 120
  });
  await ticket.save();

  return ticket;
}


it('fetches orders for a particular user', async () => {
  //create three tickets
  const ticket1 = await buildTicket();
  const ticket2 = await buildTicket();
  const ticket3 = await buildTicket();
  //create one order as User #1
  const user1 = signupHelper();

  await request(app)
  .post('/api/orders')
  .set('Cookie', user1)
  .send({ ticketId: ticket1.id})
  .expect(201)

  //create two orders as User #2
  const user2 = signupHelper();

  const { body: response1 } = await request(app)
    .post('/api/orders')
    .set('Cookie', user2)
    .send({ ticketId: ticket2.id })
    .expect(201)

  const { body: response2 } = await request(app)
    .post('/api/orders')
    .set('Cookie', user2)
    .send({ ticketId: ticket3.id })
    .expect(201)

  //make request to get orders for User #2
  const response = await request(app)
  .get('/api/orders')
  .set('Cookie', user2)
  .send()
  .expect(200)

  expect(response.body.length).toEqual(2);

  //make sure we only got the orders for user #2
  expect(response.body[0].id).toEqual(response1.id);
  expect(response.body[1].id).toEqual(response2.id);
  expect(response.body[0].ticket.id).toEqual(ticket2.id);
  expect(response.body[1].ticket.id).toEqual(ticket3.id);
})
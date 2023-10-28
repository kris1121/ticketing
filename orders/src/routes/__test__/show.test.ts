import request from 'supertest';

import { app } from '../../app';
import { signupHelper } from '../../test/setup';
import { Ticket } from '../../models/ticket';

it('fetches an order', async () => {
  const user = signupHelper();

  const ticket = Ticket.build({
    title: 'concert',
    price: 130
  });

  await ticket.save();

  const { body: order } = await request(app)
  .post(`/api/orders`)
  .set('Cookie', user)
  .send({ ticketId: ticket.id})
  .expect(201)

  const response = await request(app)
  .get(`/api/orders/${order.id}`)
  .set('Cookie', user)
  .send()
  .expect(200)

  expect(response.body.id).toEqual(order.id);
});

it('returns an error if one user tries to fetch another users order', async () => {

  const ticket = Ticket.build({
    title: 'concert',
    price: 130
  });

  await ticket.save();

  const { body: order } = await request(app)
    .post(`/api/orders`)
    .set('Cookie', signupHelper())
    .send({ ticketId: ticket.id })
    .expect(201)

  const response = await request(app)
    .get(`/api/orders/${order.id}`)
    .set('Cookie', signupHelper())
    .send()
    .expect(401)

});
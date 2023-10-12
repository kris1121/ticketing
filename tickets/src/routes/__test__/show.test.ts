import request from 'supertest';

import { app } from '../../app';
import { signupHelper } from '../../test/setup';

it('returns a 404 if the ticket is not found', async () => {
  await request(app)
  .post('/api/tickets/kjfpjsdfjsdfyhy')
  .send()
  .expect(404)
});

it('returns the ticket if the ticket is found', async () => {
  const title = 'concert';
  const price = 10;

  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', signupHelper())
    .send({
      title,
      price
    })
    .expect(201)

    const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200)

    expect(response.body.title).toEqual(title);
    expect(response.body.price).toEqual(price);
})
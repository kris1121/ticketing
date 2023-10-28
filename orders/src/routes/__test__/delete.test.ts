import request from 'supertest';

import { app } from '../../app';
import { signupHelper } from '../../test/setup';
import { Order, OrderStatus } from '../../models/order';
import { Ticket } from '../../models/ticket';

it('cancell order', async () => {
  const user = signupHelper();

  const ticket = Ticket.build({
    title: 'concert',
    price: 240
  });
  await ticket.save();

  const { body: order } = await request(app)
    .post(`/api/orders`)
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201)

  await request(app)
  .delete(`/api/orders/${order.id}`)
  .set('Cookie', user)
  .send()
  .expect(204)

  const cancelledOrder = await Order.findById(order.id);
  expect(cancelledOrder?.status).toEqual(OrderStatus.Cancelled);
});

it.todo('emits an order cancelled event')
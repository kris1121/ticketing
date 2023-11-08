import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../../app';
import { signupHelper } from '../../test/setup';
import { Order, OrderStatus } from '../../models/order';
import { Ticket } from '../../models/ticket';
import { natsWrapper } from '../../nats-wrapper';

it('cancell order', async () => {
  const user = signupHelper();

  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
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

it('emits an order cancelled event', async () => {
  const user = signupHelper();

  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
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

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
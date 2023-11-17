import request from 'supertest';
import mongoose from 'mongoose';
import { stripe } from '../../stripe';

import { app } from '../../app';
import { signupHelper } from '../../test/setup';
import { Order } from '../../models/order';
import { OrderStatus } from '@krismat/common';
import { Payment } from '../../models/payment';


it('returns a 404 when purchasing an order that does not exist', async () => {
  await request(app)
  .post('/api/payments')
  .set('Cookie', signupHelper())
  .send({
    token: 'sdsdasda',
    orderId: new mongoose.Types.ObjectId().toHexString()
  })
  .expect(404)
});

it('returns a 401 when purchasing an order that does not belong to the user', async () => {
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Created,
    price: 100,
    userId: 'jkhkjhkh',
    version: 0
  });

  await order.save();

  await request(app)
  .post('/api/payments')
  .send({
    token: 'dsadasda',
    orderId: order.id
  })
  .expect(401)
});

it('returns a 400 when purchasing an cancelled order', async () => {

  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Cancelled,
    price: 100,
    userId: new mongoose.Types.ObjectId().toHexString(),
    version: 0
  });
  await order.save();


  await request(app)
    .post('/api/payments')
    .set('Cookie', signupHelper(order.userId))
    .send({
      token: 'dsadasda',
      orderId: order.id
    })
    .expect(400)
});

it('returns a 201 with a valid inputs', async () => {
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Created,
    price: Math.floor(Math.random() * 100000),
    userId: new mongoose.Types.ObjectId().toHexString(),
    version: 0
  });
  await order.save();

  await request(app)
  .post('/api/payments')
  .set('Cookie', signupHelper(order.userId))
  .send({
    token: 'tok_visa',
    orderId: order.id
  })
  .expect(201)

const stripeCharges = await stripe.charges.list({ limit: 50 });
const stripeCharge = stripeCharges.data.find(charge => {
  return charge.amount === order.price * 100
});

expect(stripeCharge).toBeDefined();
expect(stripeCharge!.currency).toEqual('pln');

  const payment = await Payment.findOne({
    orderId: order.id,
    stripeId: stripeCharge!.id
  });

  expect(payment).not.toBeNull();
});

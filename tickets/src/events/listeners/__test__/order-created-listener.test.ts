import { natsWrapper } from "../../../nats-wrapper"
import { OrderCreatedListener } from "../order-created-listener"
import { Ticket } from "../../../models/ticket";
import { OrderCreatedEvent, OrderStatus } from "@krismat/common";
import mongoose from "mongoose";
import { Message } from "node-nats-streaming";

const setup = async () => {
  //create an instance of the listener
  const listener = new OrderCreatedListener(natsWrapper.client);

  //create and save ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 50,
    userId: 'dsdsd'
  });

  await ticket.save();

  //create the fake data event
  const data: OrderCreatedEvent['data'] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    status: OrderStatus.Created,
    userId: 'kjhkjh',
    expiresAt: 'jkhhlk',
    ticket: {
      id: ticket.id,
      price: ticket.price
    }
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn()
  }

  return { listener, data, msg, ticket };
}

it('publishes a ticket updated event', async () => {
  const { listener, data, ticket, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});

it('sets the userId of the ticket', async () => {
  const { listener, data, msg, ticket } = await setup();

  await listener.onMessage(data, msg);

  const reservedTicket = await Ticket.findById(ticket.id);

  expect(reservedTicket?.orderId).toEqual(data.id);
});

it('acks the message', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});


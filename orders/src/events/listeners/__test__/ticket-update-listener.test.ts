import mongoose from "mongoose";
import { Ticket } from "../../../models/ticket";
import { natsWrapper } from "../../../nats-wrapper";
import { TicketUpdatedListener } from "../ticket-updated-listener";
import { TicketUpdatedEvent } from "@krismat/common";
import { Message } from "node-nats-streaming";



const setup = async () => {
  //create a listener
  const listener = new TicketUpdatedListener(natsWrapper.client);

  //create and save ticket
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 40,
  });

  await ticket.save();

  //create a fake data object
  const data: TicketUpdatedEvent['data'] = {
    id: ticket.id,
    version: ticket.version + 1,
    title: 'new concert',
    price: 100,
    userId: 'lkjhjho',
  }

  //create a fake msg object
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn()
  }

  //return all of this stuff
  return { listener, data, msg, ticket };
};

it('finds, updates and saves a ticket', async () => {
  const { listener, data, msg, ticket } = await setup();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);

  expect(updatedTicket?.title).toEqual(data.title);
  expect(updatedTicket?.price).toEqual(data.price);
  expect(updatedTicket?.version).toEqual(data.version);
});

it('acks the message', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});

it('does not call ack if the event is out of order', async () => {
  const { listener, data, msg } = await setup();

  data.version = 10;

  try {
    await listener.onMessage(data, msg);
  } catch (error) {
    
  }


  expect(msg.ack).not.toHaveBeenCalled();
})
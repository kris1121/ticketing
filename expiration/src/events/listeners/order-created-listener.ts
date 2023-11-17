import { Message } from "node-nats-streaming";
import { Listener, Subjects, OrderCreatedEvent } from "@krismat/common";

import { queueGroupName } from "./queue-group-name";
import { expirationQueue } from "../../queues/expiration-queue";
import { ExpirationCompletePublisher } from "../publishers/expiration-complete-publisher";


export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {

    const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
    console.log('Waiting this many miliseconds to process the job', delay);

    await expirationQueue.add({
        orderId: data.id
      }, 
      {
        delay
      }
    );

    msg.ack();
  }
}
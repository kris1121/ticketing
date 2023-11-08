import { OrderCancelledEvent, Publisher, Subjects } from "@krismat/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
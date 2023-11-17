import { PaymentCreatedEvent, Publisher, Subjects } from "@krismat/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated; 
}
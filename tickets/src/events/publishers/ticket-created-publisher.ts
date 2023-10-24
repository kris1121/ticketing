import { Publisher, Subjects, TicketCreatedEvent } from "@krismat/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
import { Publisher, Subjects, TicketUpdatedEvent } from "@krismat/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
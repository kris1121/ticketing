import { Subjects, Publisher, ExpirationCompleteEvent } from "@krismat/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
import EventsNormalizer from 'parser/core/EventsNormalizer';
import { AnyEvent, EventType, FightEndEvent } from 'parser/core/Events';

/**
 * Normalizes in an event at the back of the queue to indicate that the fight
 * has completed and parsing will end. By subscribing to this event you can
 * ensure that pending analyzer logic completes cleanly.
 */
class FightEnd extends EventsNormalizer {
  normalize(events: Array<AnyEvent>) {
    const event: FightEndEvent = {
      timestamp: this.owner.fight.end_time,
      type: EventType.FightEnd,
      __fabricated: true,
    };
    events.push(event);
    return events;
  }
}

export default FightEnd;

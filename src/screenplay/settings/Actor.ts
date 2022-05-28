import { Performable } from './Performable';
import { Stage } from './Stage';

export class Actor {
  readonly name: string;
  readonly stage: Stage;

  constructor(name: string, stage: Stage) {
    this.name = name;
    this.stage = stage;
  }

  async attemptsTo(...toDo: Performable[]) {
    for (const task of toDo) {
      if (task != null) {
        await task.perform(this);
      }
    }
  }
}

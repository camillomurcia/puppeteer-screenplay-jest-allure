import { Actor } from './Actor';
import { Stage } from './Stage';

export class ActorBuilder {
  private static currentActor: Actor;
  private name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static createAnActorCalled(name: string): ActorBuilder {
    return new ActorBuilder(name);
  }

  whoActsIn(stage: Stage): Actor {
    ActorBuilder.currentActor = new Actor(this.name, stage);
    return ActorBuilder.currentActor;
  }

  static theCurrentActor() {
    return this.currentActor;
  }
}

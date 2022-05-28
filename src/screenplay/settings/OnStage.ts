import { Stage } from './Stage';
import { Actor } from './Actor';
import { ActorBuilder } from './ActorBuilder';

export function theActorNamed(name: string): Actor {
  return ActorBuilder.createAnActorCalled(name).whoActsIn(exports.stage);
}

export function theActorInTheSpotlight(): Actor {
  return ActorBuilder.theCurrentActor();
}

export function setTheStage(stage: Stage): void {
  exports.stage = stage;
}

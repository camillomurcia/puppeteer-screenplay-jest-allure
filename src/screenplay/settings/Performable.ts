import { Actor } from './Actor';

export interface Performable {
  perform(actor: Actor): void;
}

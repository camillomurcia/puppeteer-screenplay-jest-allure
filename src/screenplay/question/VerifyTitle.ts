import { Actor } from '../settings/Actor';
import { Question } from './Question';

declare const reporter: any;

export class VerifyTitle implements Question {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  async perform(actor: Actor): Promise<void> {
    reporter.startStep(actor.name + ' verify that the title is correct');
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain(this.title);
    reporter.endStep();
  }

  static page(title: string) {
    return new VerifyTitle(title);
  }
}

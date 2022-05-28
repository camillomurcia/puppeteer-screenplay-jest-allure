import { Actor } from '../settings/Actor';
import { Task } from './Task';

declare const reporter: any;

export class Open implements Task {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async perform(actor: Actor): Promise<void> {
    await reporter.startStep(
      actor.name + ' open the browser on the following page ' + this.url
    );
    await page.goto(this.url);
    const screenshotBuffer = await page.screenshot();
    reporter.addAttachment('Screenshot', screenshotBuffer, 'image/png');
    await reporter.endStep();
  }

  static browserURL(url: string): Task {
    return new Open(url);
  }
}

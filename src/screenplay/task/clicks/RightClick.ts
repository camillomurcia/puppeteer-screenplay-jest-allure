import { Actor } from '../../settings/Actor';
import { Task } from '../Task';

declare const reporter: any;

export class RightClick implements Task {
  private selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  async perform(actor: Actor): Promise<void> {
    await reporter.startStep(actor.name + ' right click on ' + this.selector);
    await page.click(this.selector, { button: 'right' });
    const screenshotBuffer = await page.screenshot();
    reporter.addAttachment('Screenshot', screenshotBuffer, 'image/png');
    await reporter.endStep();
  }

  static on(selector: string) {
    return new RightClick(selector);
  }
}

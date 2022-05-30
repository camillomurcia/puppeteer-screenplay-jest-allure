import { Open } from '../screenplay/task/Open';
import * as OnStage from '../screenplay/settings/OnStage';
import { VerifyTitle } from '../screenplay/question/VerifyTitle';
import { Website } from '../screenplay/models/Website';

declare const reporter: any;
let websiteObj: Website;

export function initializeDateInOpenPageDifferentsWebsite(json: string) {
  websiteObj = Website.fromJSON(json);
}

export async function whenOpenUrl(): Promise<void> {
  await reporter.startStep(
    'When ' +
      OnStage.theActorInTheSpotlight().name +
      ' wants to open the browser in ' +
      websiteObj.getNameWebsite()
  );
  await OnStage.theActorInTheSpotlight().attemptsTo(
    Open.browserURL(websiteObj.getUrlWebsite())
  );
  await reporter.endStep();
}

export async function thenVerifyTitleWebsite(): Promise<void> {
  await reporter.startStep(
    'Then he should note ' +
      websiteObj.nameWebsite +
      ' in the title of the page'
  );
  await OnStage.theActorInTheSpotlight().attemptsTo(
    VerifyTitle.page(websiteObj.getNameWebsite())
  );
  await reporter.endStep();
}

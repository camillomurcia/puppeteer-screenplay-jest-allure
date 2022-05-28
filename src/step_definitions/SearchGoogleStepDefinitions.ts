import { Open } from '../screenplay/task/Open';
import * as OnStage from '../screenplay/settings/OnStage';

declare const reporter: any;

export async function whenOpenUrl(dataEscenarios: {
  actorName: string;
  nameWebsite: string;
  website: string;
}): Promise<void> {
  await reporter.startStep(
    'When ' +
      OnStage.theActorInTheSpotlight().name +
      ' wants to open the browser in ' +
      dataEscenarios.nameWebsite
  );

  await OnStage.theActorInTheSpotlight().attemptsTo(
    Open.browserURL(dataEscenarios.website)
  );

  await reporter.endStep();
}

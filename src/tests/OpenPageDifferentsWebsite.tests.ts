import * as OnStage from '../screenplay/settings/OnStage';
import { whenOpenUrl } from '../step_definitions/SearchGoogleStepDefinitions';

declare const reporter: any;

describe('Open Page of differents webSite', () => {
  const dataEscenarioFacebook = {
    actorName: 'Juan',
    nameWebsite: 'Facebook',
    website: 'https://facebook.com'
  };

  it(
    'should display ' + dataEscenarioFacebook.nameWebsite + ' text on page',
    async () => {
      await OnStage.theActorNamed(dataEscenarioFacebook.actorName);
      await whenOpenUrl(dataEscenarioFacebook);
    }
  );

  const dataEscenarioPuppeter = {
    actorName: 'Carlos',
    nameWebsite: 'Puppeter',
    website: 'https://pptr.dev'
  };

  it(
    'should display ' + dataEscenarioPuppeter.nameWebsite + ' text on page',
    async () => {
      await OnStage.theActorNamed(dataEscenarioPuppeter.actorName);
      await whenOpenUrl(dataEscenarioPuppeter);
    }
  );
});

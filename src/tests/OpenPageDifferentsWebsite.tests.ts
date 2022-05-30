import * as OnStage from '../screenplay/settings/OnStage';
import {
  initializeDateInOpenPageDifferentsWebsite,
  thenVerifyTitleWebsite,
  whenOpenUrl
} from '../step_definitions/OpenPageDifferentsWebsite';

declare const reporter: any;

describe('Open Page of differents webSite', () => {
  const dataEscenarioFacebook: string = `{
    "actorName": "Juan",
    "nameWebsite": "Facebook",
    "urlWebsite": "https://facebook.com"
  }`;

  it('should display Facebook text on page title', async () => {
    initializeDateInOpenPageDifferentsWebsite(dataEscenarioFacebook);
    await OnStage.theActorNamed('Juan');
    await whenOpenUrl();
    await thenVerifyTitleWebsite();
  });

  const dataEscenarioPuppeter: string = `{
    "actorName": "Carlos",
    "nameWebsite": "Puppeter",
    "urlWebsite": "https://pptr.dev"
  }`;

  it('should display Puppeter text on page title', async () => {
    initializeDateInOpenPageDifferentsWebsite(dataEscenarioPuppeter);
    await OnStage.theActorNamed('Carlos');
    await whenOpenUrl();
    await thenVerifyTitleWebsite();
  });
});

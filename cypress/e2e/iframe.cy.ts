import {IframePage} from "../page/index";

describe("Test to interact with an iframe", () => {
  let iframePage: IframePage;

  beforeEach(() => {
    iframePage = new IframePage();
  });

  it("Interacting with an iframe", () => {
    iframePage.visitIframePage();
    iframePage.getFrameTitle();
    iframePage.goToCssPageInFrame();
  });
});

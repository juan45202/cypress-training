import {UploadPage} from "../page/index";

describe("Test to upload and download a file", () => {
  let uploadPage: UploadPage;
  const fileName = "prueba.txt";

  beforeEach(() => {
    uploadPage = new UploadPage();
  });

  it("Upload file", () => {
    // Arrange
    uploadPage.visitUploadPage();

    // Action
    uploadPage.uploadFile(fileName);

    // Assert
    uploadPage.getTitle(fileName);
  });
});

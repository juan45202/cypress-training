import {UploadPage} from "../page/index";
import {DownloadPage} from "../page/index";

describe("Test to upload and download a file", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;
  const fileName = "prueba.txt";

  beforeEach(() => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
  });

  it("Upload file", () => {
    // Arrange
    uploadPage.visitUploadPage();

    // Action
    uploadPage.uploadFile(fileName);

    // Assert
    uploadPage.verifyFileName(fileName);
  });

  it("Download file test", () => {
    // Arrange
    downloadPage.visitDownloadPage();
    const messageFile = "Este texto estará en el archivo de prueba";

    // Action
    downloadPage.generateFile(messageFile);
    downloadPage.downloadFile();

    // Assert
    downloadPage.verifyContentFile(messageFile);
  });
});

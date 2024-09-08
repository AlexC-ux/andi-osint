import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { AknigaEngine } from '../index.js';
describe('test akniga engine', () => {
  const aknigaEngine = new AknigaEngine();
  const notExistingNickname = `${uuidv4()}${uuidv4()}${Date.now()}`;
  const existingUsername = 'evgeny';
  it('should return true if nickname exists', async () => {
    const existingResult = await aknigaEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await aknigaEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });

  it('should return correct profile page url', async () => {
    const profilePageUrl = aknigaEngine.getProfilePageUrl(existingUsername);
    expect(!!profilePageUrl).to.be.true;
  });
});

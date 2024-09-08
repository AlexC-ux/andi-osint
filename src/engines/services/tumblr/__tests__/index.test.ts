import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { TumblrEngine } from '../index.js';
describe('test tumblr engine', () => {
  const aknigaEngine = new TumblrEngine();
  const notExistingNickname = `${uuidv4()}${Date.now()}`;
  const existingUsername = 'alex';
  it('should return true if nickname exists', async () => {
    const existingResult = await aknigaEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await aknigaEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });
});

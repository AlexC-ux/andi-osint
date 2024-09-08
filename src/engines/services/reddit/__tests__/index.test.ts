import { expect } from 'chai';
import { RedditEngine } from '../index.js';
import { v4 as uuidv4 } from 'uuid';

describe('test reddit engine', () => {
  const engine = new RedditEngine();
  const notExistingNickname = `${uuidv4()}${Date.now()}`;
  const existingUsername = 'evgeny';
  it('should return true if nickname exists', async () => {
    const existingResult = await engine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await engine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });

  it('should return correct profile page url', async () => {
    const profilePageUrl = engine.getProfilePageUrl(existingUsername);
    expect(!!profilePageUrl).to.be.true;
  });
});

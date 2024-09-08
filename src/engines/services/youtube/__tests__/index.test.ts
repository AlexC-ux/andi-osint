import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { YoutubeEngine } from '../index.js';

describe.skip('test youtube engine', () => {
  const engine = new YoutubeEngine();
  const notExistingNickname = `${uuidv4()}${uuidv4()}${Date.now()}`;
  const existingUsername = 'sygma';
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

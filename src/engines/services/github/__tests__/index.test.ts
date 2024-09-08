import { expect } from 'chai';
import { GithubEngine } from '../index.js';
// import { v4 as uuidv4 } from 'uuid';

describe('test github engine', () => {
  const ghEngine = new GithubEngine();
  const notExistingNickname = `u${Date.now()}`;
  const existingUsername = 'AlexC-UX';
  it('should return true if nickname exists', async () => {
    const existingResult = await ghEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await ghEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });

  it('should return correct profile page url', async () => {
    const profilePageUrl = ghEngine.getProfilePageUrl(existingUsername);
    expect(!!profilePageUrl).to.be.true;
  });
});

import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { TikTokEngine } from '../index.js';

describe('test tiktok engine', () => {
  const toktokEngine = new TikTokEngine();
  const notExistingNickname = `${uuidv4()}${uuidv4()}${Date.now()}`;
  const existingUsername = 'sygma';
  it('should return true if nickname exists', async () => {
    const existingResult = await toktokEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await toktokEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });
});

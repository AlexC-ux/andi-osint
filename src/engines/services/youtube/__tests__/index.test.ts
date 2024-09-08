import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { YoutubeEngine } from '../index.js';

describe.skip('test youtube engine', () => {
  const vkEngine = new YoutubeEngine();
  const notExistingNickname = `${uuidv4()}${uuidv4()}${Date.now()}`;
  const existingUsername = 'sygma';
  it('should return true if nickname exists', async () => {
    const existingResult = await vkEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await vkEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });
});

import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { YaMusicEngine } from '../index.js';

describe('test ya-music engine', () => {
  const yaMusicEngine = new YaMusicEngine();
  const notExistingNickname = `${uuidv4()}${uuidv4()}${Date.now()}`;
  const existingUsername = 'sygma';
  it('should return true if nickname exists', async () => {
    const existingResult = await yaMusicEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await yaMusicEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });
});

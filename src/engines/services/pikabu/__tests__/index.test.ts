import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { PikabuEngine } from '../index.js';
describe('test pikabu engine', () => {
  const pikabuEngine = new PikabuEngine();
  const notExistingNickname = `${uuidv4()}${uuidv4()}${Date.now()}`;
  const existingUsername = 'Viktor61';
  it('should return true if nickname exists', async () => {
    const existingResult = await pikabuEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await pikabuEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });
});

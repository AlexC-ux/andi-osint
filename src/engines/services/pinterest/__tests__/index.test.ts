import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { PinterestEngine } from '../index.js';

describe('test pinterest engine', () => {
  const pinterestEngine = new PinterestEngine();
  const notExistingNickname = `${uuidv4()}${uuidv4()}${Date.now()}`;
  const existingUsername = 'sygma';
  it('should return true if nickname exists', async () => {
    const existingResult = await pinterestEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await pinterestEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });
});

import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { PornhubEngine } from '../index.js';

describe.skip('test pornhub engine', () => {
  const pornhubEngine = new PornhubEngine();
  const notExistingNickname = `${uuidv4()}${uuidv4()}${Date.now()}`;
  const existingUsername = 'sygma';
  it('should return true if nickname exists', async () => {
    const existingResult = await pornhubEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  }).timeout(20000);

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await pornhubEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  }).timeout(20000);
});

import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import { JimbofreeEngine } from '../index.js';
describe('test jimbofree engine', () => {
  const aknigaEngine = new JimbofreeEngine();
  const notExistingNickname = `${uuidv4()}${uuidv4()}${Date.now()}`;
  const existingUsername = 'balinemo';
  it('should return true if nickname exists', async () => {
    const existingResult = await aknigaEngine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await aknigaEngine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });
});

import { expect } from 'chai';
import { WikipediaEngine } from '../index.js';
// import { v4 as uuidv4 } from 'uuid';

describe('test wikipedia engine', () => {
  const engine = new WikipediaEngine();
  const notExistingNickname = `u${Date.now()}`;
  const existingUsername = 'evgeny';
  it('should return true if nickname exists', async () => {
    const existingResult = await engine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await engine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });
});

import { expect } from 'chai';
import { PayPalEngine } from '../index.js';
// import { v4 as uuidv4 } from 'uuid';

describe('test paypal engine', () => {
  const engine = new PayPalEngine();
  const notExistingNickname = `u${Date.now()}`;
  const existingUsername = 'sygma';
  it('should return true if nickname exists', async () => {
    const existingResult = await engine.nicknameExists(existingUsername);
    expect(existingResult).to.be.true;
  });

  it('should return false if nickname does not exist', async () => {
    const notExistingResult = await engine.nicknameExists(notExistingNickname);
    expect(notExistingResult).to.be.false;
  });
});

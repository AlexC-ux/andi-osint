import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class PikabuEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('pikabu.ru', nickname => `@${nickname}`, {
      baseURL: 'http://pikabu.ru',
    });
  }
}

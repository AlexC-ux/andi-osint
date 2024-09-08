import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class AknigaEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('akniga.org', nickname => nickname, {
      baseURL: 'http://akniga.org/profile/',
    });
  }
}

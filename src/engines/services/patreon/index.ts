import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class PatreonEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('patreon.com', nickname => `${nickname}/creators`, {
      baseURL: 'https://www.patreon.com',
    });
  }
}

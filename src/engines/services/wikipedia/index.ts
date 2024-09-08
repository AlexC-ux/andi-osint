import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class WikipediaEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('wikipedia.org', nickname => `/wiki/Участник:${nickname}`, {
      baseURL: 'https://ru.wikipedia.org',
    });
  }
}

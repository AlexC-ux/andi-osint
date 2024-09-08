import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class AboutMeEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('about.me', nickname => nickname, {
      baseURL: 'https://about.me/',
    });
  }
}

import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class AboutMeEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('about.me', nickname => nickname, {
      baseURL: 'https://about.me/',
    });
  }

  override getProfilePageUrl(nickname: string): string {
    return `https://about.me/${nickname}`;
  }
}

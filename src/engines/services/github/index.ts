import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class GithubEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('github.com', nickname => nickname, {
      baseURL: 'https://github.com',
    });
  }

  override getProfilePageUrl(nickname: string): string {
    return `https://github.com/${nickname}`;
  }
}

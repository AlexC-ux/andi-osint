import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class PornhubEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('pornhub.com', nickname => `https://rt.pornhub.com/users/${nickname}`, {
      baseURL: 'https://www.pornhub.com',
    });
  }

  override getProfilePageUrl(nickname: string): string {
    return `https://rt.pornhub.com/users/${nickname}`;
  }
}

import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class VkontakteEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('vk.com', nickname => nickname, {
      baseURL: 'https://vk.com',
    });
  }

  override getProfilePageUrl(nickname: string): string {
    return `https://vk.com/${nickname}`;
  }
}

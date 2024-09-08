import { SimpleTextNotFoundEngine } from '../../base/simple-text-not-found/index.js';

export class TikTokEngine extends SimpleTextNotFoundEngine {
  constructor() {
    super(
      'tiktok.com',
      () => 'shareMeta',
      nickname => `@${nickname}`,
      {
        baseURL: 'https://www.tiktok.com',
      },
    );
  }

  override getProfilePageUrl(nickname: string): string {
    return `https://www.tiktok.com/@${nickname}`;
  }
}

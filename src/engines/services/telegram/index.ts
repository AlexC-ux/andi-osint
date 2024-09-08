import { SimpleTextNotFoundEngine } from '../../base/simple-text-not-found/index.js';

export class TelegramEngine extends SimpleTextNotFoundEngine {
  constructor() {
    super(
      'telegram',
      () => ', you can contact ',
      nickname => nickname,
      {
        baseURL: 'https://t.me/',
      },
      {
        caseSensitive: false,
      },
    );
  }

  override getProfilePageUrl(nickname: string): string {
    return `https://t.me/${nickname}`;
  }
}

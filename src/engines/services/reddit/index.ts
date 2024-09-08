import { SimpleTextNotFoundEngine } from '../../base/simple-text-not-found/index.js';

export class RedditEngine extends SimpleTextNotFoundEngine {
  constructor() {
    super(
      'reddit',
      () => 'goes by that name',
      nickname => `/user/${nickname}/`,
      {
        baseURL: 'https://www.reddit.com',
        withCredentials: true,
      },
      {
        caseSensitive: false,
      },
    );
  }

  override getProfilePageUrl(nickname: string): string {
    return `https://www.reddit.com/user/${nickname}`;
  }

  override async nicknameExists(nickname: string): Promise<boolean> {
    return !(await super.nicknameExists(nickname));
  }
}

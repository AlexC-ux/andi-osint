import { BaseEngine } from '../../base/index.js';

export class TumblrEngine extends BaseEngine {
  constructor() {
    super('tumblr.com');
  }

  override async nicknameExists(nickname: string): Promise<boolean> {
    try {
      const response = await this.http.get(`https://${nickname}.tumblr.com/`);

      return response.status == 200;
    } catch (error) {
      return false;
    }
  }
}

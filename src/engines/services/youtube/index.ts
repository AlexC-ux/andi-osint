import { BaseEngine } from '../../base/index.js';

export class YoutubeEngine extends BaseEngine {
  constructor() {
    super('youtube.com', {
      baseURL: 'https://youtube.com',
    });
  }
  async nicknameExists(nickname: string): Promise<boolean> {
    try {
      const response = await this.http.get(`user/${nickname}`, {
        validateStatus: () => true,
        withCredentials: true,
        timeout: 1000,
      });

      return response.status == 200;
    } catch (error) {
      return false;
    }
  }
}

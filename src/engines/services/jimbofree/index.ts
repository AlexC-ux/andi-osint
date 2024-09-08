import { BaseEngine } from '../../base/index.js';

export class JimbofreeEngine extends BaseEngine {
  constructor() {
    super('jimdofree.com');
  }

  override async nicknameExists(nickname: string): Promise<boolean> {
    try {
      const response = await this.http.get(`https://${nickname}.jimdofree.com`);

      return response.status == 200;
    } catch (error) {
      return false;
    }
  }
}

import { CreateAxiosDefaults } from 'axios';
import { BaseEngine } from '../index.js';
import { NicknameCheckUrl } from '../types/index.js';

export class SimpleUrlNotFoundEngine extends BaseEngine {
  nicknameCheckUrl: NicknameCheckUrl;

  constructor(platformName: string, nicknameCheckUrl: NicknameCheckUrl, axiosOverride?: CreateAxiosDefaults) {
    super(platformName, axiosOverride);
    this.nicknameCheckUrl = nicknameCheckUrl;
  }

  async nicknameExists(nickname: string): Promise<boolean> {
    try {
      const response = await this.http.get(this.nicknameCheckUrl(nickname), {
        validateStatus: () => true,
        withCredentials: true,
      });

      return response.status == 200;
    } catch (error) {
      return false;
    }
  }
}

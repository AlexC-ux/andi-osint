import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export class BaseEngine {
  getProfilePageUrl(nickname: string): string {
    return nickname;
  }
  async nicknameExists(nickname: string): Promise<boolean> {
    console.log(nickname);
    throw new Error('Not implemented');
  }
  http: AxiosInstance;
  defaultAxiosConfig: CreateAxiosDefaults = {
    validateStatus: () => true,
    withCredentials: true,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'ru-RU,ru;q=0.9',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      priority: 'u=0, i',
      'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
    },
  };
  platformName: string;
  constructor(platformName?: string, axiosOverride?: CreateAxiosDefaults) {
    if (!platformName) {
      throw new Error('Platform name is required');
    }
    this.platformName = platformName;
    this.http = axios.create({
      ...this.defaultAxiosConfig,
      ...axiosOverride,
    });
  }
}

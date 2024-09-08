import htmlParser from 'node-html-parser';
import { BaseEngine } from '../../base/index.js';

export class PinterestEngine extends BaseEngine {
  constructor() {
    super('pinterest', {
      baseURL: 'https://www.pinterest.com',
    });
  }

  async nicknameExists(nickname: string): Promise<boolean> {
    try {
      const response = await this.http.get(`${nickname}/_saved/`, {
        validateStatus: () => true,
        withCredentials: true,
      });

      const parsedHtml = htmlParser.parse(response.data);

      // Find error in next-like initial props
      const initialPropsElement = parsedHtml.querySelector('#__PWS_INITIAL_PROPS__');
      const initialProps = JSON.parse(initialPropsElement?.innerHTML || '{}');
      const userResource = initialProps?.initialReduxState?.resources?.UserResource;
      const userResourceKey = Object.keys(userResource ?? {})?.[0];
      if (userResource?.[userResourceKey]?.error?.httpStatus) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  override getProfilePageUrl(nickname: string): string {
    return `https://www.pinterest.com/${nickname}/_saved`;
  }
}

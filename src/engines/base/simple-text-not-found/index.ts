import { CreateAxiosDefaults } from 'axios';
import { BaseEngine } from '../index.js';
import { DocumentIncludesText, NicknameCheckUrl } from '../types/index.js';

export type TextSearchOptions = {
  caseSensitive?: boolean;
};

export class SimpleTextNotFoundEngine extends BaseEngine {
  options: TextSearchOptions;
  textToSearch: DocumentIncludesText;
  nicknameCheckUrl: NicknameCheckUrl;
  constructor(
    platformName: string,
    textToSearch: DocumentIncludesText,
    nicknameCheckUrl: NicknameCheckUrl,
    axiosOverride?: CreateAxiosDefaults,
    options?: TextSearchOptions,
  ) {
    super(platformName, axiosOverride);
    this.textToSearch = textToSearch;
    this.nicknameCheckUrl = nicknameCheckUrl;
    this.options = options ?? {
      caseSensitive: true,
    };
  }

  async nicknameExists(nickname: string): Promise<boolean> {
    try {
      const response = await this.http.get(this.nicknameCheckUrl(nickname), {
        validateStatus: () => true,
        withCredentials: true,
      });

      let documentContent = `${response.data}`;
      let textToSearch = this.textToSearch(nickname);
      if (!this.options.caseSensitive) {
        documentContent = documentContent.toLowerCase();
        textToSearch = textToSearch.toLowerCase();
      }
      return documentContent.includes(textToSearch);
    } catch (error) {
      return false;
    }
  }
}

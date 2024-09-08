import { Engines } from '../engines/index.js';

export class Search {
  async findByNickname(nickname: string) {
    return await Promise.all(
      Engines.map(async engineClass => {
        const classInstance = new engineClass();
        const exists = await classInstance.nicknameExists(nickname);
        return {
          platform: classInstance.platformName,
          exists,
          url: exists ? classInstance.getProfilePageUrl(nickname) : 'Not Found',
        };
      }),
    );
  }

  listServices(): string[] {
    return Engines.map(engineClass => {
      return new engineClass().platformName;
    });
  }
}

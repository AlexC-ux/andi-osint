import { Engines } from '../engines/index.js';

export class Search {
  async findByNickname(nickname: string) {
    return await Promise.all(
      Engines.map(async engineClass => {
        const classInstance = new engineClass();
        return {
          platform: classInstance.platformName,
          exists: await classInstance.nicknameExists(nickname),
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

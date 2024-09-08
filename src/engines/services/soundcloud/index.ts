import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class SoundCloudEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('soundcloud.com', nickname => nickname, {
      baseURL: 'https://soundcloud.com',
    });
  }
}

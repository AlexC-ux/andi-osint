import { SimpleUrlNotFoundEngine } from '../../base/simple-url-not-found/index.js';

export class YaMusicEngine extends SimpleUrlNotFoundEngine {
  constructor() {
    super('music.yandex.ru', nickname => `/users/${nickname}/playlists`, {
      baseURL: 'https://music.yandex.ru',
    });
  }
}

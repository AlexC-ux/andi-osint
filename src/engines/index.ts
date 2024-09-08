import { BaseEngine } from './base/index.js';
import { AboutMeEngine } from './services/aboutme/index.js';
import { AknigaEngine } from './services/akniga/index.js';
import { GithubEngine } from './services/github/index.js';
import { JimbofreeEngine } from './services/jimbofree/index.js';
import { PatreonEngine } from './services/patreon/index.js';
import { PayPalEngine } from './services/paypal/index.js';
import { PikabuEngine } from './services/pikabu/index.js';
import { PinterestEngine } from './services/pinterest/index.js';
import { PornhubEngine } from './services/pornhub/index.js';
import { RedditEngine } from './services/reddit/index.js';
import { SoundCloudEngine } from './services/soundcloud/index.js';
import { TelegramEngine } from './services/telegram/index.js';
import { TikTokEngine } from './services/tiktok/index.js';
import { TumblrEngine } from './services/tumblr/index.js';
import { VkontakteEngine } from './services/vkontakte/index.js';
import { WikipediaEngine } from './services/wikipedia/index.js';
import { YaMusicEngine } from './services/ya-music/index.js';
import { YoutubeEngine } from './services/youtube/index.js';

export const Engines: (typeof BaseEngine)[] = [
  GithubEngine,
  VkontakteEngine,
  AknigaEngine,
  PikabuEngine,
  PinterestEngine,
  YaMusicEngine,
  YoutubeEngine,
  PornhubEngine,
  TikTokEngine,
  PayPalEngine,
  PatreonEngine,
  SoundCloudEngine,
  AboutMeEngine,
  WikipediaEngine,
  JimbofreeEngine,
  TumblrEngine,
  TelegramEngine,
  RedditEngine,
];

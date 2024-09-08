import { SimpleTextNotFoundEngine } from '../../base/simple-text-not-found/index.js';

export class PayPalEngine extends SimpleTextNotFoundEngine {
  constructor() {
    super(
      'paypal.com',
      nickname => `PayPal.me/${nickname}`,
      nickname => `/paypalme/${nickname}`,
      {
        baseURL: 'https://www.paypal.com',
      },
      {
        caseSensitive: false,
      },
    );
  }
}

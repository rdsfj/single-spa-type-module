import type { WithLoadFunction } from 'single-spa-layout';

export const withLoadFct: WithLoadFunction = {
  app(config) { return Promise.reject(new Error('nope')); },
};


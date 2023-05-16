import type { ActivityFn } from 'single-spa';
export const active: ActivityFn = (location) => location.href === 'q';

// import * as SingleSpa from 'single-spa';
// export const active: SingleSpa.ActivityFn = (location) => location.href === 'q';


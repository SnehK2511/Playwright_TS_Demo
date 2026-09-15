import { defineConfig } from '@playwright/test';

const config = defineConfig({
  testDir: './new tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',
  },
});

export default config;
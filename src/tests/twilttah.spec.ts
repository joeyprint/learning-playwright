import { test, expect } from '@playwright/test';

test('Visit Twittah!', async ({ page }) => {
  await page.goto('https://twittah.web.app');
  await expect(page.getByTestId('app-name')).toBeVisible();
  await expect(page.getByTestId('app-name')).toHaveText('Twittah!');
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://twittah.web.app');
  await page.getByTestId('login-field').click();
  await page.getByTestId('login-field').fill('wasin');
  await page.getByTestId('password-field').click();
  await page.getByTestId('password-field').fill('123456');
  await page.getByTestId('login-button').click();
});

test('Sign in to Twittah', async ({ page }) => {
  await expect(page).toHaveURL('https://twittah.web.app/home');
});

test('Post Message Twittah', async ({ page }) => {
  const timestamp = new Date();
  const postMessage = `Message ${timestamp.getTime()}`;

  await page.getByTestId('message-field').click();
  await page.getByTestId('message-field').fill(postMessage);
  await page.getByTestId('post-button').click();

  const lastPost = await page.locator('.post').first();

  await expect(lastPost.locator('.body')).toHaveText(postMessage);
});

test('Sign out Twittah', async ({ page }) => {
  await page.getByTestId('menu-signout').click();
  await expect(page).toHaveURL('https://twittah.web.app');
});

import { createBdd } from 'playwright-bdd/index';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I Open Login Page', async ({ loginPage }) => {
  await loginPage.visit();
});

When(
  /I login with login name ([^ ]+) and password ([^ ]+) /,
  async ({ loginPage }, loginName: string, password: string) => {
    await loginPage.loginWith({ username: loginName, password: password });
  }
);

Then('I see the home page', async ({ homePage }) => {
  await homePage.shouldBeDisplayed;
});

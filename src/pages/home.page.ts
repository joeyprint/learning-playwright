import { Locator, Page, expect } from '@playwright/test';
import { User } from '../interfaces/user';
import { validUser } from '../fixtures/users';
import { app } from '../fixtures/app';

export class HomePage {
  readonly _page: Page;
  readonly _pageUrl: string;
  readonly _user: User;
  readonly _signoutButton: Locator;

  constructor(page: Page) {
    this._page = page;
    this._pageUrl = `${app.url}/home`;
    this._user = validUser;
    this._signoutButton = page.getByTestId('menu-signout');
  }

  shouldBeDisplayed = async () => {
    await expect(this._page).toHaveURL(this._pageUrl);
  };

  shouldDisplayUserProfileOf = (validUser: User) => {
    expect(validUser.displayName).toEqual(this._user.displayName);
  };

  logout = async () => {
    await this._signoutButton.click();
    await expect(this._page).toHaveURL(app.url);
  };
}

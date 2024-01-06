import { User } from '../interfaces/user';

export const validUser: User = {
  displayName: 'Maitree',
  credential: {
    username: 'maitree',
    password: '123456',
  },
};

export const invalidUser: User = {
  displayName: 'Badguy',
  credential: {
    username: 'badguy',
    password: 'no-such-a-password',
  },
};

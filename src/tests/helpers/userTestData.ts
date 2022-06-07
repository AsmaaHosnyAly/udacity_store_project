import { User } from '../../models/user';
import _ from 'lodash';

// Mock user data
export const userList: User[] = [
  {
    username: 'Asmaa_hosny',
    firstName: 'Asmaa',
    lastName: 'Hosny',
    password: '1223456'
  },
  {
    username: 'eslam_hosny',
    firstName: 'eslam',
    lastName: 'hosny',
    password: '123458'
  },
  {
    username: 'aly_mohamed',
    firstName: 'Aly',
    lastName: 'Mohamed',
    password: '12456'
  }
];

// Add ids and strip passwords to make test comparisons simpler
export const userListWithIdAndNoPwd = userList.map((user, index) => {
  return {
    id: index + 1,
    ..._.pick(user, ['username', 'firstName', 'lastName'])
  };
});

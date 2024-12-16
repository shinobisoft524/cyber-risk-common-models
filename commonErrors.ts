export const CyberError = {
  validation: 'Validation error',
  request: {
    incorrect: 'Incorrect request',
    duplicated: 'Duplicated data',
    duplicatedOrgUser: 'Organisation name or Email address already exists',
  },
  result: {
    noData: 'The data doesn`t exist',
  },
  unknown: 'Unknown error',
  notfound: 'User doesn`t exist',
  password: {
    incorrect: 'Your password is incorrect',
  },
  active: {
    disabled: 'Your account is disabled',
  },
  admin: {
    noPermission: 'You do not have administrator privileges',
    not: {
      dislabled: '',
    },
  },
  worker: {
    noPermission: 'You do not have worker privileges',
    not: {
      dislabled: '',
    },
  },
  user: {
    isExistedEmail: 'Email address or user name already exists',
    sentVerification: 'Sent verification email into your account',
  },
};

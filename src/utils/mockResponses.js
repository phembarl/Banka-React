export const signupResponse = {
  status: 201,
  data: [
    {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoyMiwiaWF0IjoxNTY3MDk1MzQyLCJleHAiOjE1Njk2ODczNDJ9.HURHqIIC4cE0MuMt44XFTa_jG6ay0GjuvM_FVb0Rz5s',
      id: 22,
      firstName: 'Abraham',
      lastName: 'Victor',
      email: 'victorabrahamu@andela.com',
    },
  ],
};


export const loginResponse = {
  status: 200,
  data: [
    {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdG5hbWUiOiJWaWN0b3IiLCJsYXN0bmFtZSI6IkFicmFoYW0iLCJlbWFpbCI6InZpY3RvcmFicmFoYW1AYW5kZWxhLmNvbSIsImF2YXRhciI6Imh0dHBzOi8vdWktYXZhdGFycy5jb20vYXBpLz9uYW1lPUpvaG4rRG9lJnNpemU9MjAwJmJhY2tncm91bmQ9OTllNmU2JmNvbG9yPTAwMCIsInR5cGUiOiJzdGFmZiIsImlzYWRtaW4iOmZhbHNlfSwiaWF0IjoxNTY2OTU3NzAyLCJleHAiOjE1Njk1NDk3MDJ9.2l6l5lB2Opo5p2nyiVl-oNdyI0Huvq_G2ONlwCT2lT4',
      id: 5,
      firstName: 'Victor',
      lastName: 'Abraham',
      email: 'victorabraham@andela.com',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe&size=200&background=99e6e6&color=000',
    },
  ],
};

export const signupErrorResponse = {
  status: 400,
  errors: [
    'First name cannot be empty',
    'First name can only contain letters',
    'Last name cannot be empty',
    'Last name can only contain letters',
    'Email cannot be empty',
    'Input a valid email address',
    'Type is missing. Are you a client or staff?',
    'Password cannot be empty',
    'Password cannot be less than 4 characters',
  ],
};

export const loginErrorResponse = {
  status: 400,
  errors: [
    'Input a valid email address',
    'Email cannot be empty',
    'Password cannot be empty',
  ],
};

export const userInfo = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdG5hbWUiOiJWaWN0b3IiLCJsYXN0bmFtZSI6IkFicmFoYW0iLCJlbWFpbCI6InZpY3RvcmFicmFoYW1AYW5kZWxhLmNvbSIsImF2YXRhciI6Imh0dHBzOi8vdWktYXZhdGFycy5jb20vYXBpLz9uYW1lPUpvaG4rRG9lJnNpemU9MjAwJmJhY2tncm91bmQ9OTllNmU2JmNvbG9yPTAwMCIsInR5cGUiOiJzdGFmZiIsImlzYWRtaW4iOmZhbHNlfSwiaWF0IjoxNTY2OTU3NzAyLCJleHAiOjE1Njk1NDk3MDJ9.2l6l5lB2Opo5p2nyiVl-oNdyI0Huvq_G2ONlwCT2lT4',
  userId: 5,
  firstName: 'Victor',
  lastName: 'Abraham',
  email: 'victorabraham@andela.com',
  avatar: 'https://ui-avatars.com/api/?name=Victor+Abraham&size=200&background=99e6e6&color=000',
};

export const userAccountsInfo = {
  status: 200,
  data: [
    {
      id: 1,
      accountnumber: 98636932,
      createdon: '2019-06-05T20:22:46.085Z',
      owner: 1,
      type: 'current',
      status: 'active',
      balance: '32568678.00',
    },
  ],
};

export const userAccountError = {
  status: 404,
  error: 'User not found',
};

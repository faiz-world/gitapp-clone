interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'bZSaT1ybSsU3KtSl9722vzkrBmTtK2VD',
    CLIENT_DOMAIN: 'faizhussain.auth0.com',
    AUDIENCE: 'https://faizhussain.auth0.com/userinfo',
    REDIRECT: 'http://localhost:4200/profile',
    SCOPE: 'openid profile'
  };
  
process.env.NODE_ENV = process.env.NODE_ENV || "development";
export default {
  BASE_URL: process.env.BASE_URL || "http://localhost",
  PORT: process.env.PORT || 3000,
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  },
  SALT_ROUNDS: 12,
  JWT_AUTH_USER: process.env.JWT_AUTH_USER || "test1",
  JWT_AUTH_ADMIN: process.env.JWT_AUTH_ADMIN || "test2",

  GMAIL_OAUTH: {
    user: process.env.GMAIL_USER,
    type: process.env.GMAIL_TYPE,
    cliendid: process.env.GMAIL_CLIENT_ID,
    client_secret: process.env.GMAIL_CLIENT_SECRET,
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    redirect_url: process.env.GMAIL_REDIRECT_URL
  },
  MLAB_USER: process.env.MLAB_USER,
  MLAB_PASSWORD: process.env.MLAB_PASSWORD
};

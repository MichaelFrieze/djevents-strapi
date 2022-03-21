module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '05e224ec398a5d88d96a9b0b089fd7a3'),
  },
});

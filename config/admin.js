module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd0e3bff239ef0308610f9448b7055543'),
  },
});

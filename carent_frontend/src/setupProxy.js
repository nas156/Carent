const proxy = require('http-proxy-middleware');

const apiProxy = proxy('/api', {
   target: 'http://localhost:8085',
   logLevel: 'debug',
   changeOrigin: true,
   pathRewrite: function (path, req) {
     return req.originalUrl.replace('/api/', '/');
   }
});

module.exports = function (app) {
   app.use(apiProxy);
};
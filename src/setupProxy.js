const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // ...You can now register proxies as you wish!
    app.use(proxy('/api', {
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/"
        },
    }));
    app.use(proxy('/apc', {
        target: 'http://fycftest.everest-fortune.com:30076/accountingcarloan',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/apc": "/"
        },
    }));
    //app.use(proxy('/apc', { target: 'http://172.19.5.34:9531' }));
};

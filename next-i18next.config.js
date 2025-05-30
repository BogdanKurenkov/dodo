const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'kz', 'by'],
    },
    localePath: path.resolve('./public/locales'),
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};
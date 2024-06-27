const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'others'],
  },
  localePath: path.resolve('./public/locales'),
};

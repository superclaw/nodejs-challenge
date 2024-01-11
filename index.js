const validateHash = require('./utils/validate-hash');

validateHash(process.argv[2]).then(() => console.log('OK'));

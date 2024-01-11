const readFileAndCreateHash = require('./read-file-and-create-hash');
const getHashFromFile = require('./get-hash-from-file');
const ExitCode = require('../enums/exit-code.enum');

async function validateHash(filePath) {
  const createdHash = await readFileAndCreateHash(filePath);
  const hashFromFile = await getHashFromFile(filePath);

  if (createdHash === hashFromFile) {
    console.log('Hashes are equal');
  } else {
    console.log('Hashes are not equal');
    process.exit(ExitCode.INVALID_HASH);
  }
}

module.exports = validateHash;

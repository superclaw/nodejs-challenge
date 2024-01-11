const readFile = require('./read-file');
const ExitCode = require('../enums/exit-code.enum');

async function getHashFromFile(filePath) {
  try {
    const hash = await readFile(`${filePath}.sha256`, 'utf-8');
    return hash.trim();
  } catch (e) {
    console.error('Error while reading hash file: ', e);
    process.exit(ExitCode.READ_HASH_ERROR);
  }
}

module.exports = getHashFromFile;

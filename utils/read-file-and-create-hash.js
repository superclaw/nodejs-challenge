const crypto = require('crypto');
const readFile = require('./read-file');
const ExitCode = require('../enums/exit-code.enum');

async function readFileAndCreateHash(filePath) {
  try {
    const fileBuffer = await readFile(filePath);
    return crypto.createHash('SHA256').update(fileBuffer).digest('hex');
  } catch (e) {
    console.error('Error while reading file: ', e);
    process.exit(ExitCode.READ_FILE_ERROR);
  }
}

module.exports = readFileAndCreateHash;

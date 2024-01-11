const path = require('path');
const { execSync } = require('child_process');
const ExitCode = require('../enums/exit-code.enum');

function runProgram(fileName) {
  try {
    execSync(`node index.js ${fileName}`);
    return 0;
  } catch (err) {
    return err.status;
  }
}

describe('test local', () => {
  function getPath(fileName) {
    return path.resolve(process.cwd(), 'files', fileName);
  }

  it('everything is ok', () => {
    expect(runProgram(getPath('test.txt'))).toBe(0);
    expect(runProgram(getPath('test.jpg'))).toBe(0);
  });

  it('read file error', () => {
    expect(runProgram(getPath('file.ext'))).toBe(ExitCode.READ_FILE_ERROR);
  });

  it('read hash error', () => {
    expect(runProgram(getPath('test-no-hash.txt'))).toBe(ExitCode.READ_HASH_ERROR);
    expect(runProgram(getPath('test-no-hash.jpg'))).toBe(ExitCode.READ_HASH_ERROR);
  });

  it('invalid hash error', () => {
    expect(runProgram(getPath('test-err.txt'))).toBe(ExitCode.INVALID_HASH);
    expect(runProgram(getPath('test-err.jpg'))).toBe(ExitCode.INVALID_HASH);
  });
});

describe('test remote', () => {
  function getPath(fileName) {
    return 'https://raw.githubusercontent.com/superclaw/nodejs-challenge/main/files/' + fileName;
  }

  it('everything is ok', () => {
    expect(runProgram(getPath('test.txt'))).toBe(0);
    expect(runProgram(getPath('test.jpg'))).toBe(0);
  });

  it('read file error', () => {
    expect(runProgram(getPath('file.ext'))).toBe(ExitCode.READ_FILE_ERROR);
  });

  it('read hash error', () => {
    expect(runProgram(getPath('test-no-hash.txt'))).toBe(ExitCode.READ_HASH_ERROR);
    expect(runProgram(getPath('test-no-hash.jpg'))).toBe(ExitCode.READ_HASH_ERROR);
  });

  it('invalid hash error', () => {
    expect(runProgram(getPath('test-err.txt'))).toBe(ExitCode.INVALID_HASH);
    expect(runProgram(getPath('test-err.jpg'))).toBe(ExitCode.INVALID_HASH);
  });
});

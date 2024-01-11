const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function readFile(filePath, encoding = undefined) {
  const isHttp = filePath.startsWith('http');

  if (isHttp) {
    const res = await axios.get(filePath, {
      responseType: 'arraybuffer',
    });

    if (encoding) {
      return res.data.toString(encoding);
    }

    return res.data;
  }

  return new Promise((resolve, reject) =>
    fs.readFile(path.resolve(process.cwd(), filePath), { encoding }, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    }),
  );
}

module.exports = readFile;

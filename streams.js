const fs = require("fs");

const readStream = fs.createReadStream('./docs/largeFile.txt', 'utf8');
const writeStream = fs.createWriteStream('./docs/copyLargeFile.txt');

// readStream.on('data', chunk => {
//     writeStream.write('\nNew Buffer\n');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);
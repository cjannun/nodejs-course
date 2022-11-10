const fs = require('fs');

const fs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');
/*
rs.on('data', (dataChunk) => {
  ws.write(dataChunk);
})
*/
fs.rmSync.pipe(ws);
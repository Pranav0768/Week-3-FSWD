const os = require('os');

console.log('OS Type: ' + os.type());
console.log('Total Memory: ' + os.totalmem());
console.log('Free Memory: ' + os.freemem());
console.log('CPU Info: ' + os.cpus()[0].model);


const fs = require('fs');
const logMessage = `OS Type: ${os.type()}\nTotal Memory: ${os.totalmem()}\nFree Memory: ${os.freemem()}\nCPU Info: ${os.cpus()[0].model}\n`;

const path = require('path');

const logDir = path.join(__dirname, 'logs');
const logFilePath = path.join(logDir, 'system-info.txt');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
  console.log('Logs directory created.');
}

fs.writeFile(logFilePath, logMessage, (err) => {
  if (err) throw err;
  console.log('System information saved at: ' + logFilePath);
});
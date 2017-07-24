import * as fs from "fs";

/**
 * Prints a log in a specific log file
 *
 * @export
 * @param {string} file - file name
 * @param {string} text - test to be logged
 * @param {boolean} [printToConsole] - true to print in the console
 * @returns
 */
export function saveLog(file: string, text: string, printToConsole: boolean) {
  let file_path = './logs/' + file + '.log';
  let datetime = '[' + new Date().toUTCString() + '] ';
  let output = datetime + " " + text + '\n';

  if (!fs.existsSync('./logs')) {
    fs.mkdirSync('./logs');
  }

  fs.appendFile(file_path, output, err => {
    if (err) return console.log(err);
    if (printToConsole) console.log(text);
  });
}
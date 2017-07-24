"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
/**
 * Prints a log in a specific log file
 *
 * @export
 * @param {string} file - file name
 * @param {string} text - test to be logged
 * @param {boolean} [printToConsole] - true to print in the console
 * @returns
 */
function saveLog(file, text, printToConsole) {
    var file_path = './logs/' + file + '.log';
    var datetime = '[' + new Date().toUTCString() + '] ';
    var output = datetime + " " + text + '\n';
    if (!fs.existsSync('./logs')) {
        fs.mkdirSync('./logs');
    }
    fs.appendFile(file_path, output, function (err) {
        if (err)
            return console.log(err);
        if (printToConsole)
            console.log(text);
    });
}
exports.saveLog = saveLog;

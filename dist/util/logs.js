"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function saveLog(file, text, printToConsole) {
    var file_path = './logs/' + file + '.log';
    var datetime = '[' + new Date().toUTCString() + '] ';
    var output = datetime + " " + text + '\n';
    fs.appendFile(file_path, output, function (err) {
        if (err)
            return console.log(err);
        if (printToConsole)
            console.log(text);
    });
}
exports.saveLog = saveLog;

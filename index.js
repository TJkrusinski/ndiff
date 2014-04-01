'use strict';

var child_process = require('child_process');
var concat = require('concat-stream');

/**
 *  Diff two files
 */

module.exports = function(file1, file2, cb) {
    var process = child_process.spawn('diff', [file1, file2, '-u']);
    if (cb) return process.stdout.pipe(concat({encoding: 'string'}, cb));
    return process.stdout;
};

'use strict';

var assert = require('assert');
var diff = require('..');

describe('diff()', function(){
    it('diffs files', function(d){
        diff('a', 'b', function(data){
            assert.equal(data, '');
            d();
        });
    });
});

describe('diff()', function(){
    it('diffs files', function(d){
        diff('./tests/aa', './tests/bb', function(data){
            var str = data.split('\n').slice(2, 5).join('\n');
            assert.equal(str, '@@ -1,2 +1 @@\n '+
            'this is a string\n'+
            '-this is another line');
            d();
        });
    });
});

describe('diff()', function(){
    it('diffs files', function(d){
        var stream = diff('./tests/aa', './tests/bb');
        var str = '';
        stream.on('data', function(data){
            str += data.toString();
        });

        stream.on('end', function(){
            str = str.split('\n').slice(2, 5).join('\n');
            assert.equal(str, '@@ -1,2 +1 @@\n '+
            'this is a string\n'+
            '-this is another line');
            d();
        });
    });
});

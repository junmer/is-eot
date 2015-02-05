'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isEot = require('./');

function check(filename) {
	return isEot(readChunk.sync(filename, 0, 36));
}

it('should detect EOT 0x20002 from Buffer', function () {
	assert(check('fontawesome-webfont.eot'));
});

it('should detect EOT 0x20001 from Buffer', function () {
	assert(check('fonteditor.eot'));
});

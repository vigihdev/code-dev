const test = require('node:test');
const assert = require('node:assert');
const { anyToBool, anyToArray } = require('../out');

test('to test', (t) => {
	assert.strictEqual(1, 1);
	assert.strictEqual(anyToBool(''),false);
	assert.strictEqual(anyToBool(true),true);
	assert.strictEqual(anyToBool(false),false);
	assert.deepEqual(anyToArray(false),[]);
	assert.deepEqual(anyToArray(null),[]);
});
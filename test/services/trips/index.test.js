'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('trips service', function() {
  it('registered the trips service', () => {
    assert.ok(app.service('trips'));
  });
});

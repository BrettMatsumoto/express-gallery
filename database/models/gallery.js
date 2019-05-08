'use strict';

const bookshelf = require('../bookshelf');

class Gallery extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }
}

module.exports = bookshelf.model('Gallery', Gallery);
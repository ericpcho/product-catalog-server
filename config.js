'use strict';

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost/products',
  TEST_DATABASE_URL:
        process.env.TEST_DATABASE_URL || 'mongodb://roommate-finder-test-database',
}; 
const { response } = require('express');
const { idleTimeoutMillis } = require('pg/lib/defaults');
const request = require('supertest');

const server = 'http://localhost:3000';

describe('home landing page', () => {
  describe('/', () => {
    describe('GET', () => {
      it('response status code is 200 and content-type is text/html', () => {
        request(server)
          .get('/')
          .expect(200)
          .expect('Content-Type', /application\/json/);
      });
    });
  });
});

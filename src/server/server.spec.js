// inspiration: https://www.codementor.io/nodejs/tutorial/testing-express-apis-with-supertest
// https://puigcerber.com/2015/11/27/testing-express-apis-with-tape-and-supertest/

/* eslint-disable import/no-extraneous-dependencies */
import test from 'tape';
import request from 'supertest';
import server from './server';

test('Server should serve static files', (t) => {
  request(server)
    .get('/')
    .expect('Content-Type', /text\/html/)
    .expect(200)
    .end((err) => {
      t.plan(1);
      t.error(err, 'No error');
      t.end();
    });
});

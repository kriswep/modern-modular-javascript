/* //inspiration: https://puigcerber.com/2015/11/27/testing-express-apis-with-tape-and-supertest/
// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'tape';
import index from './index';

// smoke test
test('Server should not crash', (t) => {
  t.plan(1);

  t.doesNotThrow(() => {
    // eslint-disable-next-line
    index;
  });

  t.end();
});
*/

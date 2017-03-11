// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'tape';
import 'ignore-styles';
import app from './app';

// smoke test
test('App should not crash', (t) => {
  t.plan(1);

  t.doesNotThrow(() => {
    // eslint-disable-next-line
    app;
  });

  t.end();
});

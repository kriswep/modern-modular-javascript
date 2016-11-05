// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'tape';
import driver from '../driver';

const state = {
  name: 'drvr',
  position: 0,
};

test('Driver should be able to drive', (t) => {
  t.plan(1);

  const drvr = driver(state);
  t.doesNotThrow(() => {
    drvr.drive();
  });

  t.end();
});

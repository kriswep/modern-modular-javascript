// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'tape';
import killer from './killer';

const state = {
  name: 'kllr',
  position: 0,
};

test('Killer should be able to kill', (t) => {
  t.plan(2);

  const kllr = killer(state);
  t.doesNotThrow(() => {
    kllr.kill();
  });

  t.equal(kllr.kill(),
    'kllr is killing now! Better keep away from position 0!', 
    'Killer should kill at its position');
  t.end();
});

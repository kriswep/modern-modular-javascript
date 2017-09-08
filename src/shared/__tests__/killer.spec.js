/* globals test expect */
import killer from '../killer';

const state = {
  name: 'kllr',
  position: 0,
};

test('Killer should be able to kill', () => {
  expect.assertions(2);

  const kllr = killer(state);
  expect(kllr.kill).not.toThrow();

  expect(kllr.kill()).toBe('kllr is killing now! Better keep away from position 0!');
});

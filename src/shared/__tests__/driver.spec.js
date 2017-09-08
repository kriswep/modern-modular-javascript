/* globals test expect */
import driver from '../driver';

const state = {
  name: 'drvr',
  position: 0,
};

test('Driver should be able to drive', () => {
  expect.assertions(1);

  const drvr = driver(state);
  expect(drvr.drive).not.toThrow();
});

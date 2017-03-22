/* globals test expect */
import barker from '../barker';

test('Barker should be able to bark', () => {
  expect.assertions(2);
  const brkr = barker({ name: 'brkr' });
  expect(
    brkr.bark,
  ).not.toThrow();

  expect(brkr.bark()).toBe('Woof, I am brkr!');
});

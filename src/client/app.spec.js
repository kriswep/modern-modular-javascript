/* globals test expect */
import app from './app';

// smoke  test
test('App should not crash', () => {
  expect.assertions(3);

  expect(app.bark).not.toThrow();
  expect(app.drive).not.toThrow();
  expect(app.kill).not.toThrow();
});

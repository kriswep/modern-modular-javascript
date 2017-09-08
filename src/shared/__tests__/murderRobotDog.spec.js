/* globals test expect */
import murderRobotDog from '../murderRobotDog';

const mrdrrbtdg = murderRobotDog('mrdrrbtdg');

test('MurderRobotDog should be able to bark', () => {
  expect.assertions(2);

  expect(mrdrrbtdg.bark).not.toThrow();

  expect(mrdrrbtdg.bark()).toBe('Woof, I am mrdrrbtdg!');
});

test('MurderRobotDog should be able to drive', () => {
  expect.assertions(1);

  expect(mrdrrbtdg.drive).not.toThrow();
});

test('MurderRobotDog should be able to kill', () => {
  expect.assertions(2);

  expect(mrdrrbtdg.kill).not.toThrow();

  expect(mrdrrbtdg.kill()).toBe('mrdrrbtdg is killing now! Better keep away from position 100!');
});

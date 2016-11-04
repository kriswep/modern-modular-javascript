// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'tape';
import murderRobotDog from './murderRobotDog';

const mrdrrbtdg = murderRobotDog('mrdrrbtdg');

test('MurderRobotDog should be able to bark', (t) => {
  t.plan(2);

  t.doesNotThrow(() => {
    mrdrrbtdg.bark();
  });

  t.equal(mrdrrbtdg.bark(), 'Woof, I am mrdrrbtdg!',
    'Barker should bark its name');
  t.end();
});

test('MurderRobotDog should be able to drive', (t) => {
  t.plan(1);

  t.doesNotThrow(() => {
    mrdrrbtdg.drive();
  });

  t.end();
});

test('MurderRobotDog should be able to kill', (t) => {
  t.plan(2);

  t.doesNotThrow(() => {
    mrdrrbtdg.kill();
  });

  t.equal(mrdrrbtdg.kill(),
    'mrdrrbtdg is killing now! Better keep away from position 100!',
    'Killer should kill at its position');
  t.end();
});

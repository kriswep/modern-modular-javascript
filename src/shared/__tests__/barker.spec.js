// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'tape';
import barker from '../barker';

test('Barker should be able to bark', (t) => {
  t.plan(2);

  const brkr = barker({ name: 'brkr' });
  t.doesNotThrow(() => {
    brkr.bark();
  });

  t.equal(brkr.bark(), 'Woof, I am brkr!', 'Barker should bark its name');
  t.end();
});

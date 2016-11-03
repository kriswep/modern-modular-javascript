import test from 'tape';
import barker from './barker';

test('Barker should be able to bark', (t) => {
  const brkr = barker('brkr');
  t.doesNotThrow(() => {
    brkr.bark();
  });
  t.end();
});

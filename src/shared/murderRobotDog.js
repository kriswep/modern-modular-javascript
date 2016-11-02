import barker from './barker';
import driver from './driver';
import killer from './killer';

const murderRobotDog = (name) => {
  const state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    );
};

export default murderRobotDog;

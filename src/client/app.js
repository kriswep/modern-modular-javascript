import murderRobotDog from '../shared/murderRobotDog';

const guerilla = murderRobotDog('guerilla');

guerilla.bark();
guerilla.kill();
guerilla.drive();
guerilla.kill();

// eslint-disable-next-line 
window.guerilla = guerilla;

import murderRobotDog from '../shared/murderRobotDog';
import './app.css';

const guerilla = murderRobotDog('guerilla');

// eslint-disable-next-line no-console
console.log(guerilla.bark());
// eslint-disable-next-line no-console
console.log(guerilla.kill());
guerilla.drive();
// eslint-disable-next-line no-console
console.log(guerilla.kill());

// eslint-disable-next-line 
//window.guerilla = guerilla; // expose it to play around

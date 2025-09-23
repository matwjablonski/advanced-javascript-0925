import User from './user.mjs';
import { isAdult } from './utils.mjs';

const user1 = new User('Jan', 20);
const user2 = new User('Anna', 17);

const isAdultUser1 = isAdult(user1); // true
const isAdultUser2 = isAdult(user2); // false

console.log(isAdultUser1); // true
console.log(isAdultUser2); // false
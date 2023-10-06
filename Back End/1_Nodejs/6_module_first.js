// const simple = require("./6_module_second");
// simple();


// import {simple,names} from './6_module_second.js';
// simple();
// console.log(names);


import * as a2 from './6_module_second.js'
console.log(a2);
a2.simple();
console.log(a2.names);
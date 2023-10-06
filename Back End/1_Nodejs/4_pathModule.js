const path = require('path');


const val = path.basename('C:\\temp\\myfile.html');
// Returns: 'C:\\temp\\myfile.html'
console.log(val);


const val2 = path.dirname('C:\\temp\\myfile.html');
// Returns: '/foo/bar/baz/asdf'
console.log(val2);


const val3 = path.extname(__filename);
console.log(__filename,val3);
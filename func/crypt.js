var jwt = require('jsonwebtoken');

var token = jwt.sign({"name":"ft","email":"fmthottathil@gmail.com"}, 'shhhhh');
console.log(token)



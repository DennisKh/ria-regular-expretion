const reg_exp = require('./model');
const test = require('./test');
module.exports = function main_testing() {
  for (var i = 0; i < test.length; i++) {
    let url = test[i];
    console.log('Test ' + i + "\n");
    reg_exp(url)
    console.log("---------------------");
  }
}

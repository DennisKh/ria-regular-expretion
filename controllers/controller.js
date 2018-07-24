const reg_exp = require('../models/model');
const test = require('../helpers/test');
module.exports = function main_testing() {
  for (var i = 0; i < test.length; i++) {
    let url = test[i];
    console.log('Test ' + i + "\n");
    reg_exp(url)
    console.log("---------------------");
  }
}

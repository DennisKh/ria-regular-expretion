const {
  languages, regions, sities, banks, near_metro, streets, sdannyye,
   stroyashchiyesya, types, klasses, roommate, rassrochka, remont
} = require('../helpers/data');


module.exports = function regular(url) {
  function joining(arg) {
    return arg.join('|');
  };

  function check(reg, i) {
    if (reg != null && reg !='undefined') {
      return reg[i];
    } else {
      return  '';
    }
  };
  function klass_check(reg) {
    if (reg != null && reg != 'undefined') {
      return reg[0].replace(/-klassa/g, '');
      //console.log(reg);
    } else {
      return  '';
      //console.log(reg);
    }
  }

  var language = new RegExp(`(${joining(languages)})`).exec(url),
      region = new RegExp(`(${joining(regions)}|[a-z]+)(?=-oblast)`).exec(url),
      sity = new RegExp(`(${joining(sities)})(?!(aya|skaya)-oblast)`).exec(url),
      area = new RegExp(`(-rayon-|'')(=?([a-z]+))`).exec(url),
      metro_reg = new RegExp(`(-metro-|'')(=?([a-z]+))`).exec(url),
      bank = new RegExp(`(${joining(banks)})(?=-bereg)`).exec(url),
      near_metro_reg = new RegExp(`(${joining(near_metro)})`, 'i').exec(url),
      street = new RegExp(`(ulitsa-)(=?([a-z]+))`).exec(url),
      sdannyye_reg = new RegExp(`(${joining(sdannyye)})`).exec(url),
      building = new RegExp(`(${joining(stroyashchiyesya)})`).exec(url),
      type = new RegExp(`(${joining(types)})`).exec(url),
      klass = new RegExp(`(${joining(klasses)})`).exec(url),
      roommate_reg = new RegExp(`(${joining(roommate)})`).exec(url),
      rassrochka_reg = new RegExp(`(${joining(rassrochka)})`).exec(url),
      remont_reg = new RegExp(`(${joining(remont)})`).exec(url),
      result_reg = [
        url,check(language, 0),check(region, 0),check(sity, 0),
        check(area, 2),check(metro_reg, 2),check(bank, 0),check(near_metro_reg, 0),check(street, 2),
        check(sdannyye_reg, 0),check(building, 0),check(type, 0),klass_check(klass),
        check(roommate_reg, 0),check(rassrochka_reg, 0),check(remont_reg, 0)
      ];

  for (var i = 0; i < result_reg.length; i++) {
    if (result_reg[i] != '') {
      console.log(result_reg[i])
    } else {
      continue;
    }
  }
}

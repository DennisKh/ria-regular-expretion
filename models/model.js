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
    } else {
      return  '';
    }
  };

  function metro_check(reg) {
    if (reg != null && reg != 'undefined') {
      return reg[0].replace(/-metro-/g, '');
    } else {
      return  '';
    }
  };

  function street_check(reg) {
    if (reg != null && reg != 'undefined') {
      return reg[0].replace(/-ulitsa-/g, '');
    } else {
      return  '';
    }
  };

  function area_check(reg) {
    if (reg != null && reg != 'undefined') {
      return reg[0].replace(/-rayon-/g, '');
    } else {
      return  '';
    }
  }

  var language = new RegExp(`(${joining(languages)}+?)`).exec(url),
      region = new RegExp(`(${joining(regions)}+?)(?=-oblast)`).exec(url),
      sity = new RegExp(`(${joining(sities)})(?!(aya|skaya)-oblast)`).exec(url),
      area = new RegExp(`(-rayon-)(=?(\\w+))`).exec(url),
      metro_reg = new RegExp(`(-metro-)(=?(\\w+))`).exec(url),
      bank = new RegExp(`(${joining(banks)}+?)(?=-bereg)`).exec(url),
      near_metro_reg = new RegExp(`(${joining(near_metro)})`, 'i').exec(url),
      street = new RegExp(`(-ulitsa-)(=?(\\w+))`).exec(url),
      sdannyye_reg = new RegExp(`(${joining(sdannyye)})`).exec(url),
      building = new RegExp(`(${joining(stroyashchiyesya)})`).exec(url),
      type = new RegExp(`(${joining(types)})`).exec(url),
      klass = new RegExp(`(${joining(klasses)})`).exec(url),
      roommate_reg = new RegExp(`(${joining(roommate)})`).exec(url),
      rassrochka_reg = new RegExp(`(${joining(rassrochka)})`).exec(url),
      remont_reg = new RegExp(`(${joining(remont)})`, 'i').exec(url);


      var reg_ex = new RegExp(`(${
        check(language, 0)
      })\\S*?(${
        check(region, 0)
      })\\S*?(${
        check(sity, 0)
      })\\S*?(${
        area_check(area)
      })\\S*?(${
        metro_check(metro_reg)
      })\\S*?(${
        check(bank, 0)
      })\\S*?(${
        check(near_metro_reg, 0)
      })\\S*?(${
        street_check(street)
      })\\S*?(${
        check(sdannyye_reg, 0)
      })\\S*?(${
        check(building, 0)
      })\\S*?(${
        check(type, 0)
      })\\S*?(${
        klass_check(klass)
      })\\S*?(${
        check(roommate_reg, 0)
      })\\S*?(${
        check(rassrochka_reg, 0)
      })\\S*?(${
        check(remont_reg, 0)
      })`,'gim').exec(url);

    if (reg_ex != null) {
      for (var i = 0; i < reg_ex.length; i++) {
        if (reg_ex[i] != '') {
          console.log(reg_ex[i])
        } else {
          continue;
        }
      }
  } else {
    console.log('ERROR!!!');
  }
}

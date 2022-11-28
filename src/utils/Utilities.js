const moment = require("moment");

export const getDate = ({ fecha = null, hora = true }) => {
  let date;
  if (!fecha) {
    if (!hora) {
      date = moment().format("YYYY-MM-DD");
    } else {
      date = moment().format("YYYY-MM-DD HH:mm:ss");
    }
  } else {
    if (!hora) {
      date = moment(fecha).format("YYYY-MM-DD");
    } else {
      date = moment(fecha).format("YYYY-MM-DD HH:mm:ss");
    }
  }
  return date;
};

export const getTime = ({ hora = null }) => {
  let date;
  if (!hora) {
    date = moment().format("HH:mm");
  } else {
    date = moment(hora).format("HH:mm");
  }

  return date;
};

export const getFileType = (extension) => {
  const imageExtensions = ["jpg", "jpeg", "png", "ico"];
  const xmlExtensions = ["xlsx", "xlsm", "xls", "xltx"];
  if (imageExtensions.find((element) => element === extension)) {
    return "image";
  }
  if (xmlExtensions.find((element) => element === extension)) {
    return "xml";
  }
  if (extension === "pdf") {
    return "application/pdf";
  }
  return "txt";
};

export const numberWithCommas = (x) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return x;
  }
};

export const getDaysByNumber = (dayNumber) => {
  const week = [
    { value: 1, label: 'Lunes' },
    { value: 2, label: 'Martes' },
    { value: 3, label: 'Miercoles' },
    { value: 4, label: 'Jueves' },
    { value: 5, label: 'Viernes' },
    { value: 6, label: 'Sábado' },
    { value: 7, label: 'Domingo' },

  ];
  const results = week.find(row => {
    return row.value === dayNumber;
  });
  return results ? results.label : "";
}

export const handleAttrs = (data) => {
  let newObject = {}
  Object.keys(data).forEach(key => {
    if (typeof data[key] === 'string') {
      if (data[key].length < 1) newObject[key] = null;
      else newObject[key] = data[key];
    } else {
      newObject[key] = data[key]
    }
  })

  return newObject;
}

/**
 * @param {date|moment} start The start date
 * @param {date|moment} end The end date
 */
export const getDateRange = (startDate, endDate) => {
  let fromDate = moment(startDate)
  let toDate = moment(endDate)

  if (fromDate.format('YYYY-MM-DD') === toDate.format('YYYY-MM-DD')) return [fromDate]

  let diff = toDate.diff(fromDate, 'days');

  let range = []
  for (let i = 0; i <= diff; i++) {
    range.push(moment(startDate).add(i, 'days'))
  }
  return range
}

export const dayInRange = (startDate, endDate, day) => {
  let range = getDateRange(startDate, endDate, 'days')
  let days = range.map(item => moment(item).isoWeekday())
  let daysRange = new Set(days)
  return daysRange.has(day);
}

export const dateInRange = (startDate, endDate, date) => {
  let range = getDateRange(startDate, endDate)
  let dateRange = range.map(item => moment(item).format('YYYY-MM-DD'))
  return dateRange.filter(item => item === moment(date).format('YYYY-MM-DD')).length > 0;
}

export const unique_objects_array = array => {
  return array.filter((item, index) => array.findIndex(obj => obj.value === item.value) === index);
}

export const _round = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

export const removeDiacritics = (str) => {
  let diacriticsMap = {
    A: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g,
    AA: /[\uA732]/g,
    AE: /[\u00C6\u01FC\u01E2]/g,
    AO: /[\uA734]/g,
    AU: /[\uA736]/g,
    AV: /[\uA738\uA73A]/g,
    AY: /[\uA73C]/g,
    B: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g,
    C: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g,
    D: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g,
    DZ: /[\u01F1\u01C4]/g,
    Dz: /[\u01F2\u01C5]/g,
    E: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g,
    F: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g,
    G: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g,
    H: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g,
    I: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g,
    J: /[\u004A\u24BF\uFF2A\u0134\u0248]/g,
    K: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g,
    L: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g,
    LJ: /[\u01C7]/g,
    Lj: /[\u01C8]/g,
    M: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g,
    N: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g,
    NJ: /[\u01CA]/g,
    Nj: /[\u01CB]/g,
    O: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g,
    OI: /[\u01A2]/g,
    OO: /[\uA74E]/g,
    OU: /[\u0222]/g,
    P: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g,
    Q: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g,
    R: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g,
    S: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g,
    T: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g,
    TZ: /[\uA728]/g,
    U: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g,
    V: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g,
    VY: /[\uA760]/g,
    W: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g,
    X: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g,
    Y: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g,
    Z: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g,
    a: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g,
    aa: /[\uA733]/g,
    ae: /[\u00E6\u01FD\u01E3]/g,
    ao: /[\uA735]/g,
    au: /[\uA737]/g,
    av: /[\uA739\uA73B]/g,
    ay: /[\uA73D]/g,
    b: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g,
    c: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g,
    d: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g,
    dz: /[\u01F3\u01C6]/g,
    e: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g,
    f: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g,
    g: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g,
    h: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g,
    hv: /[\u0195]/g,
    i: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g,
    j: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g,
    k: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g,
    l: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g,
    lj: /[\u01C9]/g,
    m: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g,
    n: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g,
    nj: /[\u01CC]/g,
    o: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g,
    oi: /[\u01A3]/g,
    ou: /[\u0223]/g,
    oo: /[\uA74F]/g,
    p: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g,
    q: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g,
    r: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g,
    s: /[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g,
    ss: /[\u00DF]/g,
    t: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g,
    tz: /[\uA729]/g,
    u: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g,
    v: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g,
    vy: /[\uA761]/g,
    w: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g,
    x: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g,
    y: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g,
    z: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
  };
  for (let x in diacriticsMap) {
    // Iterate through each keys in the above object and perform a replace
    str = str.replace(diacriticsMap[x], x);
  }
  return str;
}

export const _trim = (valor) => {
  return valor.replace(/^\s+|\s+$/g, '');
}

export const validaINE = (INE, NombreINE, PaternoINE, MaternoINE, idSexo, FechaNacimiento, idEstadoNacimiento) => {
  const ClaveElector = removeDiacritics(INE);
  const Nombre = removeDiacritics(NombreINE);
  const Paterno = PaternoINE.toUpperCase();
  const Materno = MaternoINE.toUpperCase();


  const INE_PATERNO = ClaveElector.substring(0, 2);
  const INE_MATERNO = ClaveElector.substring(2, 4);
  const INE_NOMBRE = ClaveElector.substring(4, 6);
  const INE_FECHA = ClaveElector.substring(6, 12);
  // const INE_ENTIDAD = ClaveElector.substring(12, 14);
  const INE_SEXO = ClaveElector.substring(14, 15);

  let nNombre = '';
  let nPaterno = '';
  let nMaterno = '';
  let NombreLiso6 = '';
  let ItemNombreX = '';


  let ItemNombre = Nombre.split(' ');
  if (ItemNombre.length === 1) {
    if (Nombre.length === 1) {
      nNombre = Nombre + 'X';
    } else {
      const tmpNombreX = Nombre.substring(1, 10);
      const tmpNombre = tmpNombreX.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);
      if (tmpNombre.length > 0) {
        nNombre = Nombre[0] + tmpNombre[0];
      } else {
        nNombre = Nombre.substring(0, 2);
      }
    }
  } else {
    if (_trim(ItemNombre[0].replace(/[\W\d_]/g, '')).length === 1) {
      nNombre = ItemNombre[0].replace(/[\W\d_]/g, '').toUpperCase() + 'X';
    } else if (_trim(ItemNombre[0].replace(/[\W\d_]/g, '')).length === 2) {
      nNombre = ItemNombre[0].replace(/[\W\d_]/g, '');
    } else if (
      _trim(ItemNombre[0].replace(/[\W\d_]/g, '')).length === 3 &&
      removeDiacritics(ItemNombre[0].toUpperCase()) !== removeDiacritics('MARÍA')
    ) {
      const tmpNombreXUA = ItemNombre[0].substring(1, 10);
      const tmpNombreUA = tmpNombreXUA.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);
      if (tmpNombreXUA === 'NOE') {
        nNombre = 'NE';
      } else if (tmpNombreUA.length > 0) {
        nNombre = ItemNombre[0][0] + tmpNombreUA[0];
      } else {
        if (ItemNombre[0].length > 1)
          nNombre = ItemNombre[0].substring(0, 2);
        else
          nNombre = ItemNombre[0][0] + 'X';
      }
    } else {
      let NombreLiso = ItemNombre.filter((item) => item.toUpperCase() !=='DE');
      let NombreLiso2 = NombreLiso.filter((item) => item.toUpperCase() !=='DEL');
      let NombreLiso3 = NombreLiso2.filter((item) => item.toUpperCase() !=='LAS');
      let NombreLiso4 = NombreLiso3.filter((item) => item.toUpperCase() !=='LOS');
      let NombreLiso5 = NombreLiso4.filter((item) => item.toUpperCase() !=='LA');

      if (NombreLiso5.length === 2) {
        if (removeDiacritics(NombreLiso5[0].toUpperCase()) === removeDiacritics('JOSE')) {
          if (removeDiacritics(NombreLiso5[1].toUpperCase()) === removeDiacritics('MARIA')) {
            nNombre = 'JS';
          } else
            if (removeDiacritics(NombreLiso5[1].toUpperCase()) === removeDiacritics('JOSE')) {
              nNombre = 'JS';
            }
            else
              if (removeDiacritics(NombreLiso5[1].toUpperCase()) === removeDiacritics('JESUS')) {
                if (removeDiacritics(Nombre.toUpperCase()) === removeDiacritics('JOSE DE JESUS')) {
                  nNombre = 'JS';
                } else {
                  nNombre = 'JS';
                }
              } else {
                NombreLiso6 = NombreLiso5.filter((item) => removeDiacritics(item.toUpperCase()) !==removeDiacritics('MARÍA'));
                ItemNombreX = NombreLiso6.filter((item) => removeDiacritics(item.toUpperCase()) !==removeDiacritics('JOSE'));
                if (ItemNombreX.length > 0) {
                  if (ItemNombreX[0].length === 1) {
                    nNombre = ItemNombreX[0] + 'X';
                  } else {
                    const tmpNombreX = ItemNombreX[0].substring(1, 10);
                    const tmpNombre = tmpNombreX.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);
                    if (tmpNombre.length > 0) {
                      nNombre = ItemNombreX[0][0] + tmpNombre[0];
                    } else {
                      if (ItemNombreX[0].length > 1)
                        nNombre = ItemNombreX[0].substring(0, 2);
                      else
                        nNombre = ItemNombreX[0][0] + 'X';
                    }
                  }
                } else {
                  nNombre = '';
                  const tmpNombreXU = ItemNombre[0].substring(1, 10);
                  const tmpNombreU = tmpNombreXU.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);

                  if (tmpNombreU.length > 0) {
                    nNombre = ItemNombre[0][0] + tmpNombreU[0];
                  } else {
                    if (ItemNombre[0].length > 1)
                      nNombre = ItemNombre[0].substring(0, 2);
                    else
                      nNombre = ItemNombre[0][0] + 'X';
                  }
                }
              }
        } else
          if (removeDiacritics(NombreLiso5[0].toUpperCase()) === removeDiacritics('MARIA')) {
            if (removeDiacritics(NombreLiso5[1].toUpperCase()) === removeDiacritics('JOSEFINA')) {
              nNombre = 'JS';
            } else
              if (removeDiacritics(NombreLiso5[1].toUpperCase()) === removeDiacritics('JOSE')) {
                nNombre = 'MR';
              }
              else
                if (removeDiacritics(NombreLiso5[1].toUpperCase()) === removeDiacritics('JESUS')) {
                  if (removeDiacritics(Nombre.toUpperCase()) === removeDiacritics('MARIA DE JESUS')) {
                    nNombre = 'JS';
                  } else {
                    nNombre = 'JS';
                  }
                } else {
                  NombreLiso6 = NombreLiso5.filter((item) => removeDiacritics(item.toUpperCase()) !==removeDiacritics('MARÍA'));
                  ItemNombreX = NombreLiso6.filter((item) => removeDiacritics(item.toUpperCase()) !==removeDiacritics('JOSE'));

                  if (ItemNombreX.length > 0) {
                    if (ItemNombreX[0].length === 1) {
                      nNombre = ItemNombreX[0] + 'X';
                    } else {
                      const tmpNombreX = ItemNombreX[0].substring(1, 10);
                      const tmpNombre = tmpNombreX.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);

                      if (tmpNombre.length > 0) {
                        nNombre = ItemNombreX[0][0] + tmpNombre[0];
                      } else {
                        if (ItemNombreX[0].length > 1)
                          nNombre = ItemNombreX[0].substring(0, 2);
                        else
                          nNombre = ItemNombreX[0][0] + 'X';
                      }
                    }

                  } else {
                    nNombre = '';
                    const tmpNombreXU = ItemNombre[0].substring(1, 10);
                    const tmpNombreU = tmpNombreXU.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);
                    if (tmpNombreU.length > 0) {
                      nNombre = ItemNombre[0][0] + tmpNombreU[0];
                    } else {
                      if (ItemNombre[0].length > 1)
                        nNombre = ItemNombre[0].substring(0, 2);
                      else
                        nNombre = ItemNombre[0][0] + 'X';
                    }
                  }
                }
          }
          else {
            NombreLiso6 = NombreLiso5.filter((item) => removeDiacritics(item.toUpperCase()) !==removeDiacritics('MARÍA'));
            ItemNombreX = NombreLiso6.filter((item) => removeDiacritics(item.toUpperCase()) !==removeDiacritics('JOSE'));

            if (ItemNombreX.length > 0) {
              if (ItemNombreX[0].length === 1) {
                nNombre = ItemNombreX[0] + 'X';
              } else {
                const tmpNombreX = ItemNombreX[0].substring(1, 10);
                const tmpNombre = tmpNombreX.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);
                if (tmpNombre.length > 0) {
                  nNombre = ItemNombreX[0][0] + tmpNombre[0];
                } else {
                  if (ItemNombreX[0].length > 1)
                    nNombre = ItemNombreX[0].substring(0, 2);
                  else
                    nNombre = ItemNombreX[0][0] + 'X';
                }
              }
            } else {
              nNombre = '';
              const tmpNombreXU = ItemNombre[0].substring(1, 10);
              const tmpNombreU = tmpNombreXU.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);

              if (tmpNombreU.length > 0) {
                nNombre = ItemNombre[0][0] + tmpNombreU[0];
              } else {
                if (ItemNombre[0].length > 1)
                  nNombre = ItemNombre[0].substring(0, 2);
                else
                  nNombre = ItemNombre[0][0] + 'X';
              }
            }
          }
      } else {
        NombreLiso6 = NombreLiso5.filter((item) => removeDiacritics(item.toUpperCase()) !==removeDiacritics('MARÍA'));
        ItemNombreX = NombreLiso6.filter((item) => removeDiacritics(item.toUpperCase()) !==removeDiacritics('JOSE'));

        if (ItemNombreX.length > 0) {
          if (ItemNombreX[0].length === 1) {
            nNombre = ItemNombreX[0] + 'X';
          } else {
            const tmpNombreX = ItemNombreX[0].substring(1, 10);
            const tmpNombre = tmpNombreX.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);
            if (tmpNombre.length > 0) {
              nNombre = ItemNombreX[0][0] + tmpNombre[0];
            } else {
              if (ItemNombreX[0].length > 1)
                nNombre = ItemNombreX[0].substring(0, 2);
              else
                nNombre = ItemNombreX[0][0] + 'X';
            }
          }
        } else {
          nNombre = '';
          const tmpNombreXU = ItemNombre[0].substring(1, 10);
          const tmpNombreU = tmpNombreXU.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);
          if (tmpNombreU.length > 0) {
            nNombre = ItemNombre[0][0] + tmpNombreU[0];
          } else {
            if (ItemNombre[0].length > 1)
              nNombre = ItemNombre[0].substring(0, 2);
            else
              nNombre = ItemNombre[0][0] + 'X';
          }
        }
      }
    }
  }

  let ItemPaterno = Paterno.split(' ');

    if (ItemPaterno.length === 1) {
      if (Paterno.length === 1) {
        nPaterno = Paterno + 'X';
      } else {
        const tmpPaternoX = Paterno.substring(1, 10);
        const tmpPaterno = tmpPaternoX.replace(/[aeiouñáéíóú]/gi, '').substring(0, 6);
        if (tmpPaterno.length > 0) {
          nPaterno = Paterno[0] + tmpPaterno[0];
        } else {
          nPaterno = Paterno.substring(0, 2);
        }
      }
    } else {

      let PaternoLiso = ItemPaterno.filter((item) => item.toUpperCase() !=='DE');
      let PaternoLiso2 = PaternoLiso.filter((item) => item.toUpperCase() !=='DEL');
      let PaternoLiso3 = PaternoLiso2.filter((item) => item.toUpperCase() !=='LAS');
      let PaternoLiso4 = PaternoLiso3.filter((item) => item.toUpperCase() !=='LOS');
      let PaternoLiso5 = PaternoLiso4.filter((item) => item.toUpperCase() !=='LA');
      let ItemPaternoX = PaternoLiso5.filter((item) => item.toUpperCase() !=='Y');

      if (ItemPaternoX.length > 0) {
        if (ItemPaternoX[0].length === 1) {
          nPaterno = ItemPaternoX[0] + 'X';
        } else {

          const tmpPaternoX = ItemPaternoX[0].substring(1, 10);
          const tmpPaterno = tmpPaternoX.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);

          if (tmpPaterno.length > 0) {
            nPaterno = ItemPaternoX[0][0] + tmpPaterno[0];
          } else {
            if (ItemPaternoX[0].length > 1)
              nPaterno = ItemPaternoX[0].substring(0, 2);
            else
              nPaterno = ItemPaternoX[0][0] + 'X';
          }
        }
      } else {
        nPaterno = '';
        const tmpNombreXU = ItemPaterno[0].substring(1, 10);
        const tmpNombreU = tmpNombreXU.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);

        if (tmpNombreU.length > 0) {
          nPaterno = ItemPaterno[0][0] + tmpNombreU[0];
        } else {
          if (ItemPaterno[0].length > 1)
            nPaterno = ItemPaterno[0].substring(0, 2);
          else
            nPaterno = ItemPaterno[0][0] + 'X';
        }
      }
    }

    let ItemMaterno = Materno.split(' ');

    if (ItemMaterno.length === 1) {

      if (Materno.length === 1) {
        nMaterno = Materno + 'X';
      } else {
        const tmpMaternoX = Materno.substring(1, 10);
        const tmpMaterno = tmpMaternoX.replace(/[aeiouñáéíóú]/gi, '').substring(0, 6);

        if (tmpMaterno.length > 0) {
          nMaterno = Materno[0] + tmpMaterno[0];
        } else {
          nMaterno = Materno.substring(0, 2);
        }
      }
    } else {
      let MaternoLiso = ItemMaterno.filter((item) => item.toUpperCase() !=='DE');
      let MaternoLiso2 = MaternoLiso.filter((item) => item.toUpperCase() !=='DEL');
      let MaternoLiso3 = MaternoLiso2.filter((item) => item.toUpperCase() !=='LAS');
      let MaternoLiso4 = MaternoLiso3.filter((item) => item.toUpperCase() !=='LOS');
      let MaternoLiso5 = MaternoLiso4.filter((item) => item.toUpperCase() !=='LA');
      let ItemMaternoX = MaternoLiso5.filter((item) => item.toUpperCase() !=='Y');

      if (ItemMaternoX.length > 0) {
        if (ItemMaternoX[0].length === 1) {
          nMaterno = ItemMaternoX[0] + 'X';
        } else {
          const tmpMaternoX = ItemMaternoX[0].substring(1, 10);
          const tmpMaterno = tmpMaternoX.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);

          if (tmpMaterno.length > 0) {
            nMaterno = ItemMaternoX[0][0] + tmpMaterno[0];
          } else {
            if (ItemMaternoX[0].length > 1)
              nMaterno = ItemMaternoX[0].substring(0, 2);
            else
              nMaterno = ItemMaternoX[0][0] + 'X';
          }
        }
      } else {
        nMaterno = '';
        const tmpNombreXU = ItemMaterno[0].substring(1, 10);
        const tmpNombreU = tmpNombreXU.replace(/[aeiouñáéíóú]/gi, '').substring(0, 8);

        if (tmpNombreU.length > 0) {
          nMaterno = ItemMaterno[0][0] + tmpNombreU[0];
        } else {
          if (ItemMaterno[0].length > 1)
            nMaterno = ItemMaterno[0].substring(0, 2);
          else
            nMaterno = ItemMaterno[0][0] + 'X';
        }
      }
    }

    const F2N = {
      YY: INE_FECHA.substring(0, 2),
      MM: INE_FECHA.substring(2, 4),
      DD: INE_FECHA.substring(4, 6),
    }
    let FN = F2N.YY + F2N.MM + F2N.DD
    const nSexo = idSexo === 2 ? 'h' : idSexo === 3 ? 'm' : '';

    if (INE_NOMBRE.toUpperCase() !==nNombre.toUpperCase()) {
      return { results: false, message: 'Nombre no coincide con ID Único' };
    }

    if (INE_PATERNO.toUpperCase() !==nPaterno.toUpperCase()) {
      return { results: false, message: 'Apellido Paterno no coincide con ID Único' };
    }

    if (INE_MATERNO.toUpperCase() !==nMaterno.toUpperCase()) {
      return { results: false, message: 'Apellido Materno no coincide con ID Único' };
    }

    if (INE_FECHA !==FN) {
      return { results: false, message: 'Fecha Nacimiento no coincide con ID Único' };
    }
    if (INE_SEXO.toUpperCase() !==nSexo.toUpperCase()) {
      return { results: false, message: 'Sexo no coincide con ID Único' };
    }
  return { results: true, message: 'Datos validados correctamente' };
}
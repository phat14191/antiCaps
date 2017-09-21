function isCap(letter) {
  return letter === letter.toUpperCase();
}


function antiCaps(str) {
  var strArray = str.split("");
  for (var i = 0; i < strArray.length; i++) {
    if (isCap(strArray[i])) {
      strArray[i] = strArray[i].toLowerCase();
  }  else {
      strArray[i] = strArray[i].toUpperCase();
    }
  }
  return strArray.join("");
}

console.log(antiCaps("HeelLoo wOOlD"));

// function antiCaps(str) {
//   var lowers = "aadsarkwkfdakfqkerqw";
//   var uppers = lowers.toUpperCase();
//
//   var newStr = "";
//
//   for (var i = 0; i < str.length; i++) {
//     if (uppers.indexOf(str[i]) !== -1) {
//       newStr = newStr + str[i].toLowerCase();
//     } else {
//       newStr = newStr + str[i].toUpperCase();
//     }
//   }
//   return newStr;
// }
// console.log(antiCaps("asdqwSDASDdsAA"));

module.exports = function check(str, bracketsConfig) {
  // your solution
  let strlength = str.length;

  for (let i = 0; i < strlength; i++) {
    for (let a=0; a < bracketsConfig.length; a++) {
      let pattern = bracketsConfig[a].join('');
      str = str.replace(pattern, '');
    }
  }

  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
}
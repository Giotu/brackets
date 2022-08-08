module.exports = function check(str, bracketsConfig) {

  const stack = [];
  const brackets = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) {
      stack.push(str[i])
    } else {
      if (brackets[str[i]] === stack[stack.length - 1]) {
        stack.pop()
      }
      else {
        stack.push(str[i]);
      }
    }
  }
  return stack.length === 0;

}


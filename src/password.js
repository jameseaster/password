// generate a random password of a given length
function generate(length) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "123456789";
  const symbols = `!@#$%^&*()_+{}|[]\:";'<>?,./`;
  let password = "";
  const chars = [lower, upper, nums, symbols];

  while (length > 0) {
    // select a random char set
    let randomIdx = Math.floor(Math.random() * chars.length);
    // select a random char from random char set
    let randomChar = Math.floor(Math.random() * chars[randomIdx].length);
    // add char to password
    password += chars[randomIdx][randomChar];
    // decrement length
    length -= 1;
  }

  return password;
}

export default generate;

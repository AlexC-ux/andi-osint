export function getArgs() {
  let args: Record<string, string> = {};
  const argsArr = process.argv.slice(2);

  for (let index = 0; index < argsArr.length; index++) {
    const argument = argsArr[index];
    if ((index + 1) % 2 != 0) {
      args[argument] = '';
    } else {
      args[argsArr[index - 1]] = argument;
    }
  }

  return args;
}

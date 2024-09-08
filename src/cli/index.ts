import { Search } from '../search/index.js';
import { getArgs } from './args/index.js';
import { TextBlocks } from './text-blocks/index.js';

const search = new Search();

export async function runCli() {
  console.log(TextBlocks.logo);
  console.log();
  console.log();

  const args = getArgs();

  const helpMessage = [
    TextBlocks.howToUse,
    '',
    '',
    'Installation: npm i -g andi-osint',
    '',
    'Usage: andi-osint [options]',
    '',
    'Options:',
    '   -h, --help,            Display this help message',
    '   -n, --nickname         Nickname for the search',
    '   -ls, --list            List of available services',
    '',
    'Example: andi-osint -n alexc-ux',
  ].join('\n');

  const argsKeys = Object.keys(args);

  if (argsKeys.length === 0) {
    console.log(helpMessage);
    return;
  }

  const helpMessageCommands = ['-h', '--h', '-help', '--help', '--hh', '-hh'];

  for (const element of helpMessageCommands) {
    if (argsKeys.includes(element)) {
      console.log(helpMessage);
      return;
    }
  }

  const listServicesArgs = ['-ls', '--list'];

  for (const element of listServicesArgs) {
    if (argsKeys.includes(element)) {
      const services = search
        .listServices()
        .map((service, index) => `${index + 1}. ${service}`)
        .join('\n');
      const resultMessage = [TextBlocks.servicesLst, '', '', services, '', ''].join('\n');
      console.log(resultMessage);
      return;
    }
  }

  const singleNicknameSearchArgs = ['-n', '--nickname'];

  for (const element of singleNicknameSearchArgs) {
    if (argsKeys.includes(element)) {
      const nickname = args[element];
      console.log(`Searching for nickname: ${nickname}`);
      console.log();
      console.log();
      const searchResult = await search.findByNickname(nickname);
      const formatedResult = searchResult
        .sort(r => (r.exists ? -1 : 1))
        .map(r => `[${r.platform}] ${r.exists ? r.url : 'X'}`)
        .join('\n');
      console.log(formatedResult);
      console.log();
      console.log();
      return;
    }
  }
}

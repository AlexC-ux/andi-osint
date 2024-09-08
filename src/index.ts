import { Search } from './search/index.js';

const search = new Search();

async function searchNickname() {
  const nickname = 'sygma';
  console.log(await search.findByNickname(nickname));
}
searchNickname();

console.log(search.listServices());

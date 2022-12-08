const { getFilters } = require("ytsr");
const ytsr = require("ytsr");

const optionsSR = {
  safeSearch: false,
  limit: 3,
};

async function searchYoutube(obj) {
  const search = await getFilters(`${obj?.name} ${obj?.artist}`);
  const filtered = await search.get("Type").get("Video");
  const searchResults = await ytsr(filtered.url, optionsSR);
  // console.log({...obj, link: searchResults.items[0]?.url} )
  //   return { link: searchResults.items[0]?.url };
  return { ...obj, link: searchResults.items[0]?.url };
}

module.exports = { searchYoutube };

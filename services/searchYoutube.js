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

  // items[0].track.duration_ms

  const diffs = [];
  for (const match of searchResults.items) {
    const splited = match.duration ? match.duration.split(":") : "";
    const diff =
      obj?.time / 1000 - (Number(splited[0]) * 60 + Number(splited[1]));
    diffs.push(Math.abs(diff));
  }
  const minimun = Math.min(...diffs);
  const index = diffs.indexOf(minimun);
  // console.log(minimun, index);

  return {
    ...obj,
    link: searchResults?.items[index]?.url,
    title: searchResults?.items[index]?.title,
  };
}

module.exports = { searchYoutube };

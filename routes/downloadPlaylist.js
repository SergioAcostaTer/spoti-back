const express = require("express");
var SpotifyWebApi = require("spotify-web-api-node");
const router = express.Router();
const { getTracks } = require("../services/getTracks.js");
const { searchYoutube } = require("../services/searchYoutube.js");

router.get("/downloadplaylist/:playlistID", async (req, res) => {
  const { playlistID } = req.params;
  const accesToken =
    "BQBZlopfD4-EykVCbACSYcZpiI4wAdwzVFCfL6NMmlVWVb8-WH16yPMS2sqdBeqkKVeY3njCwaj_qoTf7_daJ2wgeutY7Th2Fb9lP_Jn_SW06UEaGv-3wFgdmWzEqwAsId6eOq7ocOOhY5KYp0ThzR0ZSEjKNaCXmtgS9yIWrmoHh2NqY8KFS4m7M_JRokU";

  //playlist
  const data = await getTracks(playlistID, accesToken);

  const result = [];
  for (let i = 0; i < data?.items?.length; i++) {
    const name = data?.items[i].track?.name;
    const artist = data?.items[i].track?.artists[0].name;
    const searched = await searchYoutube({name, artist});
    console.log(searched)
    result.push(searched);
  }

//   result.map((song) => {
//     console.log(song);
//   });


  res.json(result);
});

module.exports = router;

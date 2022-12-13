const express = require("express");
const router = express.Router();
// const { getTracks } = require("../services/getTracks.js");
const { searchYoutube } = require("../services/searchYoutube.js");
const ytdl = require("ytdl-core");

router.get("/download/:name/:artist/:time", async (req, res) => {
  const { name, artist, time } = req.params;

  const searched = await searchYoutube({ name, artist, time });

  res.header(
    "Content-Disposition",
    `attachment; filename="${name} - ${artist}.mp3`
  );
  console.log(name, artist)
  ytdl(searched.link, { format: "mp3", quality: "lowestaudio" }).pipe(res);
});

module.exports = router;

const fetch = require("node-fetch");

async function getTracks(id, token) {
  const res = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

module.exports = { getTracks };

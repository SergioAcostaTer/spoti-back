const express = require('express')
const cors = require("cors")
const app = express()

const downloadPlaylist = require("./routes/downloadPlaylist")

const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

app.use("/", downloadPlaylist)


app.listen(PORT, console.log(`Server running on ${PORT} port :)`))
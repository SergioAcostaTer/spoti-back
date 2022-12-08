const express = require('express')
const cors = require("cors")
const app = express()

const downloadSong = require("./routes/downloadSong")

const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("yess!!")
})
app.use("/", downloadSong)


app.listen(PORT, console.log(`Server running on ${PORT} port :)`))
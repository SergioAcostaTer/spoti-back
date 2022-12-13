const express = require('express')
const cors = require("cors")
const app = express()

const downloadSong = require("./routes/downloadSong")

const PORT = process.env.PORT || 4000
// var HOST = '192.168.1.90';

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("yess!!")
})
app.use("/", downloadSong)


app.listen(PORT, "192.168.1.90" ,console.log(`Server running on ${PORT} port :)`))
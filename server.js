const express = require('express')
const app = express();
require('dotenv').config()
const path = require('path')

const PORT = process.env.PORT || 5001

app.use(express.static(path.join(__dirname, '/client/dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

app.listen(PORT, console.log(`listening on port ${PORT}`))
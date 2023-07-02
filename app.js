const port = process.env.PORT || 3000;
const express = require('express');

app = express()

app.get('/', (req,res) => {
    res.render('index.html');
})

app.listen(port, () => {
    console.log('listening on port 3000...')
})
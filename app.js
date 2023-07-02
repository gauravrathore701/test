const port = process.env.PORT || 3000;

const express = require('express');
const ejs = require('ejs');
const path = require('path');

app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('listening on port 3000...')
})
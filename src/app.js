const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'../templates/views'))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))

app.use(express.static(path.join(__dirname,'../public')));
app.get('', (request, response) => {
    response.render('index')
})


app.listen(port, () => {
    console.log('Server is up on port 3000')
})
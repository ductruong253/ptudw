let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'))

let expressHbs = require('express-handlebars')
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
})
app.engine('hbs',  hbs.engine)
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/:page', (req, res) => {
    let banners = {
        'blog': 'Our blog',
        'category': 'Category',
        'cart': 'Cart',
        'checkout': 'Checkout',
        'confirmation': 'Confirmation',
        'contact': 'Contact',
        'login': 'Login',
        'register': 'Register',
        'single-blog': 'Single blog',
        'single-product': 'Single product',
        'tracking-order': 'Tracking order'
    }
    let page = req.params.page;
    console.log(page)
    res.render(page, {banner: banners[`${page}`]})
})

app.set('port', 8080);
app.listen(app.get('port'), () => {
    console.log('Server started')
})
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

app.get('/cart', (req, res) => {
    res.render('cart')
})

app.get('/category', (req, res) => {
    res.render('category')
})

app.get('/checkout', (req, res) => {
    res.render('checkout')
})

app.get('/confirmation', (req, res) => {
    res.render('confirmation')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/single-blog', (req, res) => {
    res.render('single-blog')
})

app.get('/single-product', (req, res) => {
    res.render('single-product')
})

app.get('/tracking-order', (req, res) => {
    res.render('tracking-order')
})

app.set('port', 8080);
app.listen(app.get('port'), () => {
    console.log('Server started')
})
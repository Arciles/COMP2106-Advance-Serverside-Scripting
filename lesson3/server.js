/**
 * Created by esattahaibis on 2017-01-25.
 */

const connect = require('connect');
const url = require('url');
const accounting = require('accounting');
const app = connect();

// default page
app.use('/hello', function (req, res, next) {
    res.end('Hello');
});

// goodbye page
app.use('/goodbye', function (req, res, next) {
   res.end('Goodbye');
});

// JSON API
app.use('/json', function (req, res, next) {
    let json = {
        "name": "ESAT",
        "Occupy": "Super Dank",
        "Awesomeness Level": 9000
    };
    console.log(JSON.stringify(json));
    res.writeHead(200, {"Content-type" : "application/json"});
    res.end(JSON.stringify(json));
});

// tax calculator
app.use('/tax', function (req, res, next) {

    // get the full query string ?amount=1000
    let query = url.parse(req.url, true).query;

    // get the amount value
    let amount = parseFloat(query.amount);

    // calculate tax and total
    let hst = amount * .13;
    let total = amount + hst;
    amount = accounting.formatMoney(amount);
    hst = accounting.formatMoney(hst);
    total = accounting.formatMoney(total);
    //display all
    res.end(`<h1>Tax Calculator</h1>
            Amount: ${amount} <br>
            HST: ${hst} <br>
            Total: ${total}`);
});


// index page
app.use('/', function (req, res, next) {
   res.end('whatever');
});

app.listen(3000);
console.log('Server started at 3000');
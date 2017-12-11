let express = require('express');
let bodyParser = require('body-parser');
let env = require('./env');

let app = express();

let port = env.PORT;

let jsonParser = bodyParser.json();

app.post('/login', jsonParser, (req, res) => {
    if(!req.body.username || !req.body.password) {
       return res.status(400).send('You provided unvalid data to login!');
    }
    res.json({ token: new Buffer(req.body.username).toString('base64') });
});

app.get('/policies', jsonParser, (req, res) => {
    if(!req.headers.token){
        res.status(403).send('You have to be logged in to see this route!');
    }
    res.status(200).json(['travel',   'motor',   'buildings   and   contents',   'mobile',   'home',   'income']);
});

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
       console.log(`Server started at http://localhost:${port}`)
    }
});
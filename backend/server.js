const express = require('express'),
        cors = require('cors'),
        mongoose = require('mongoose'),
        database = require('./database'),
        bodyParser = require('body-parser')

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected');
}, error => {
    console.log('Can not Connect');
})

const userAPI = require('../backend/router/user');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(cors());

app.use('/api', userAPI);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connect'+ port);
})

app.use((req, res, next) => {
    next(createError(404))
})


app.use(function(err, req, res, next){
    console.error(err.message);
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).send(err.message)
})
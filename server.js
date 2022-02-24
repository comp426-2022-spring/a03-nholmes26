// Allow require in js module
import { createRequire } from 'module';
const require = createRequire(import.meta.url)

// Require Express.js
const express = require('express')
const app = express()

var port = 5000

const server = app.listen(HTTP_PORT, () => {
    // Start an app server
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

app.use(function(req, res){
    // Default response for any other request
    res.status(404).send('404 NOT FOUND')
});

app.get('/app/', (req, res) => {
    // Define Checkpoint
    // Respond with status 200
    res.statusCode = 200;
    // Respond with status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode+ ' ' +res.statusMessage)
});


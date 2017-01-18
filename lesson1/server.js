/**
 * Created by RFreeman on 1/11/2017.
 */

// link to the http module that ships with node
var http = require('http');

// start the http server
http.createServer(function(request, response) {
    // send a response to the browser
    response.writeHead(200);  // http status code ok
    response.write('<h1>Our first node page</h1>');
    response.end('<h2>Ending the response</h2>');
}).listen(3000);

// display message in command prompt
console.log('Server running on port 3000');



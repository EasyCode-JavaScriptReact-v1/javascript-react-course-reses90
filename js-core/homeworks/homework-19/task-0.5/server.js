const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {
    let path = request.url;

	if(path == '/'){
		path = '/index.html';
    }
    
    let index = fs.readFileSync(`.${path}`);
    
	response.end(index);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`http://localhost:3000/`)
});


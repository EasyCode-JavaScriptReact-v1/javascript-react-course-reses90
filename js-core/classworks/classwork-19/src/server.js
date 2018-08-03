const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    const index = fs.readFileSync('../index.html');
    
    if(request.url === '/src/main.js') {
        const main = fs.readFileSync('./main.js');

        response.end(main)
    }
    console.log(request.url)
    if(request.url === '/src/cat.jpg') {
        const cat = fs.readFileSync('./cat.jpg');

        response.end(cat)
    }

    response.end(index)
}).listen(3000, err => {
    console.log('server started http://localhost:3000')
})
const http = require('http')

const server = http.createServer((req,res) => {
    res.end('Réponse server attendu');
});


server.listen(process.env.PORT || 3000);

module.exports = app;

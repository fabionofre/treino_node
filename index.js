var http = require('http');
var router = require('rotas/routerConfig.js');

port = 3000;
http.createServer(function(req, res){

	router.router(res, req);
	
}).listen(port, 'localhost', function(){
	console.log('Servidor rodando na porta: '+port);
});

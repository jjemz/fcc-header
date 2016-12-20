
var express = require('express');
var app = express();
app.set('trust_proxy', 1);

var port = process.env.PORT || 8080;

app.get('/', function(req, res){
	//var ip = req.ip;
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	res.send(ip);

});

app.listen(port, function(){
	console.log('Example app listening on port ' + port);
})


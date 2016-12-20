
var express = require('express');
var app = express();
app.set('trust_proxy', 1);

var port = process.env.PORT || 8080;

app.get('/', function(req, res){
	var head = req.headers;
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	var lang = req.headers['accept-language'];
	var software = req.headers['user-agent'];
	var jsonStr = convertToJSON(ip, lang, software);
	res.send(jsonStr);
	//res.send(head);

});

app.listen(port, function(){
	console.log('Example app listening on port ' + port);
})


function convertToJSON(ip, lang, software){
	var json = {};
	json['ipaddress'] = ip;
	json['language'] = lang;
	json['software'] = software;
	return json;
}

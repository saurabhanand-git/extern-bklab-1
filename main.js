
const express = require('express')


const app = express();


const zip = require('express-zip');


const folderPath = __dirname+'/Files';


app.get('/single',function(req,res) {
	console.log('single file');
	
	
	res.download(folderPath+'/single_down.txt', function(err) {
		if(err) {
			console.log(err);
		}
	})
})


app.get('/multiple', function(req, res) {
	console.log('Multiple file download')

	
	res.zip([
		{ path: folderPath+'/multiple_one_down.txt',
			name: 'one_down.txt'},
		{ path: folderPath+'/multiple_two_down.txt',
			name: 'two_down.txt'},
		{ path: folderPath+'/multiple_three_down.txt',
			name: 'three_down.txt'}
	])
})


app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
})


app.listen(3000,function(req,res){
	console.log('Server started to listen at 3000');
})

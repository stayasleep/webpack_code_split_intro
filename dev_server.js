const express = require('express');
const { resolve } = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const PORT = process.env.PORT || 3000;
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config); //pass into config file

app.use(webpackDevMiddleware(compiler, {
	contentBase: resolve(__dirname, 'dist'),//where out content it
	publicPath: '/',
	historyApiFallback: true
}));

app.get('*',function(req,res){
	res.sendFile(resolve(__dirname,'dist','index.html')); //every single req, load this file
});

app.listen(PORT, function(){
	console.log('\nDev server running at localhost:'+PORT);
});

//express server will now bundle and listen at the port, but the page wont auto refresh when you make changes
//need a plugin for webpack to accomplish that
//in cli enter "PORT=#### node dev_server.js" and that sets it to a diff port than described above

var express = require('express'),
    app = express(),
    port = process.env.port || 3001; 

app.listen(port, () => {
    console.log('Server listening on port 3001');
});

// app.get('/test', function(req, res) {
//     return res.json({'success': 'true'});
//   });

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html'); 
}); 
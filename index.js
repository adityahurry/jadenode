var express = require('express');
var app = express();
var app = express();
app.set('port', (process.env.PORT || 5000));
// views is directory for all template files
app.set('views', __dirname + '/views/');
app.set('view engine', 'pug');
app.use('/', express.static(__dirname + '/public'));

app.get('/forMaddie', function (request, response) {
        response.render('maddie_pug');
})

app.get('/pugListsAreNice', function(request, response) {
        console.log("here1");
        response.render('puglists', { 
                data: [
                {
                        'stringValue': 'SomeValue',
                        'numberField': 42
                }, 
                {
                        'stringValue': 'OtherValue',
                        'numberField': 420
                }
                ]
        });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
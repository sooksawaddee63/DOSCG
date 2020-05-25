const express = require('express');
const app = express();
app.use(express.static('views')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

app.get('/', function(req, res){
  res.sendFile('index.html');
}); 

app.get('/1', function(req, res){
  res.sendFile('Front_BT.html');
}); 

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});
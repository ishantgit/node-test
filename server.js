const express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
  next();
});

app.get('/',(req,res)=>{
  res.send('Hello express!');
});

app.listen(3000,() => {
  console.log('Server is up');
});

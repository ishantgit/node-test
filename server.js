const express = require('express');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
  next();
});

app.get('/',(req,res)=>{
  res.send('Hello express!');
});

app.listen(port,() => {
  console.log(`Server is up at${port}`);
});

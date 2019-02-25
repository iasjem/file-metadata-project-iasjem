'use strict';

const express = require('express'),
      cors = require('cors'),
      multer = require('multer'),
      upload = multer({ dest: "uploads/" });

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res, next){
  const file = req.file;
  res.json({
    "fileName": file.originalname,
    "sizeInBytes": file.size
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

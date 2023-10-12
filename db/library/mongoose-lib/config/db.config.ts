const mongoose = require('mongoose');
let devurl="mongodb://127.0.0.1:27017/appomix-kass-ponam-mony-march23"
mongoose.connect( devurl)
  .then(() => console.log('Connected!'));
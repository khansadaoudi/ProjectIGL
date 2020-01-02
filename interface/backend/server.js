const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connecting the database 
const MONGOBD_URI = 'mongodb+srv://fatima:fatima@cluster0-9rdal.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(MONGOBD_URI,{
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true

});

// verifier si on est bien connecté a la bdd
mongoose.connection.on('connected',()=>{
  console.log('welocome to mongo!!!');
});

const etudiantsRouter = require('./routes/etudiants');
const postRouter = require('./routes/api');

app.use('/etudiants', etudiantsRouter);
app.use('/api', postRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
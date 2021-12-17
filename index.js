import express from 'express';
import bodyParser from 'body-parser';

const app= express();
// this is the server port
const PORT= 1000;

// // this just tells that we are using json on our application
// json is a common format for sending and receiving requests from the API
app.use(bodyParser.json());
 

// creating my own router
app.get('/', (req, res) => {
  console.log('successful');
//   successful must appear on console if the text written on res.send runs on the browser

//   this enables display of the content in a browser
  res.send('hello world');
});


// this helps to run the server
app.listen (PORT, () => console.log('server running on port: http://localhost:${PORT}'));

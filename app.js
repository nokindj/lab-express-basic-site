const express = require('express');
const app = express(); // represents our server
 
app.use(express.static("public")); // provides de access to the folders

// Creating a route /home
app.get("/home",(request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});
 
app.get('/about', (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
});

app.get("/works",(request, response) => {
    response.sendFile(__dirname + "/views/works.html");
  });

app.get("/photo-gallery",(request, response) => {
    response.sendFile(__dirname + "/views/photo-gallery.html");
  });

app.listen(3000, () => {
    console.log("My first app using express is waiting for requests.");
});
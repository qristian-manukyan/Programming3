var express = require("express");
var app = express();

app.use(express.static("."));

app.get("/", function(req, res) {
   res.redirect("/");
});

app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name + "</h1>");
});

app.get("/search/:search", function(req, res) {
    var search = req.params.search;
    res.redirect('https://www.google.com/search?q=' + search);
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
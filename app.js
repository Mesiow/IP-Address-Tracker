const express = require("express");
const app = express();
var env = require("./config");


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
   res.render("index"); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening at port", PORT);
});


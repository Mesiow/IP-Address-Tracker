const express = require("express");
const app = express();
const fetch = require("node-fetch");
const env = require("./config");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const api_url = `https://geo.ipify.org/api/v1?apiKey=${env.IPIFY_KEY}&ipAddress=8.8.8.8`;


app.get("/", (req, res) => {
   res.render("index"); 
});

app.get("/result", (req, res) => {
    //fetch data from api
    fetch(api_url)
    .then(res => res.json())
    .then(json => console.log(json));

    //render data on ejs template
    //res.render("show", {data: json});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening at port", PORT);
});


const express = require("express");
const app = express();
const fetch = require("node-fetch");
const env = require("./config");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const api_url = `https://geo.ipify.org/api/v1?apiKey=${env.IPIFY_KEY}`;

app.get("/", (req, res) => {
   res.render("index", {data: null}); 
});

app.get("/result", (req, res) => {
    let domain = req.query.domain;
    let url = api_url + `&domain=${domain}`;
    fetch(url)
     .then(res => res.json())
     .then(json => {
         res.render("index", {data: json});
     });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening at port", PORT);
});


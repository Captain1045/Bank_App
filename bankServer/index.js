const express = require("express");
const app = new express();
app.get("/", (req, res) => {
    res.send("Welcome GET");
});
app.post("/", (req, res) => {
    res.send("Welcome POST");
});
app.put("/", (req, res) => {
    res.send("Welcome PUT");
});
app.patch("/", (req, res) => {
    res.send("Welcome PATCH");
});
app.delete("/", (req, res) => {
    res.send("Welcome DELETE");
});
app.listen(3000, () => {
    console.log("TESTING");
});

//const { json } = require("express");
const express = require("express");
const dataService = require("./services/data_service");
const app = new express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome GET");
});
app.post("/login", (req, res) => {
    
    const result=dataService.login(req.body.accno,req.body.pass);
    console.log(res.send(result.message));
    res.send("Welcome login GET");

});
app.post("/register", (req, res) => {
    console.log(req.body);
    const result = dataService.registerData(req.body.accno, req.body.name, req.body.bal, req.body.pass);
    console.log(res.send(result.message));
    res.send("Welcome register POST");
});
//app.post("/", (req, res) => {
//     res.send("Welcome POST");
// });
// app.put("/", (req, res) => {
//     res.send("Welcome PUT");
// });
// app.patch("/", (req, res) => {
//     res.send("Welcome PATCH");
// });
// app.delete("/", (req, res) => {
//     res.send("Welcome DELETE");
// });
app.listen(3000, () => {
    console.log("TESTING");
});

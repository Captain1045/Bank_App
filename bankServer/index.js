//const { json } = require("express");
const express = require("express");
const session = require('express-session');
const dataService = require("./services/data_service");
const app = new express();
var currentUser;
app.use(express.json());
const logMiddleware = (req, res, next) => {
    console.log(req.body);
    next();
}
app.use(logMiddleware);
const authenticateMiddleware=(req,res,next)=>{
    if (req.session.currentUser != accountDetails[req.body.accno].name) {
        return res.json({
            status: false,
            statusCode: 422,
            message: "Please Log in!"
        })
    }
    else
    {
    next();
    }
}
app.use(session({
    secret: "randomsecurestring",
    resave: false,
    saveUninitialized: false
}));
app.get("/", (req, res) => {
    res.send("Welcome GET");
});
app.post("/login", (req, res) => {

    const result = dataService.login(req, req.body.accno, req.body.pass);
    console.log(res.status(result.statusCode).json(result));
    //currentUser=res.send(result.currentUser);
    // res.send("Welcome login GET");

});
app.post("/register", (req, res) => {
    console.log(req.body);
    const result = dataService.registerData(req.body.accno, req.body.name, req.body.bal, req.body.pass);
    console.log(res.status(result.statusCode).json(result));
    // console.log(res.send(result.message));
    // res.send("Welcome register POST");
});
app.post("/deposit",authenticateMiddleware, (req, res) => {
    console.log(req.body);
    const result = dataService.deposit(req, req.body.accno, req.body.pass, req.body.amount);
    console.log(res.status(result.statusCode).json(result));
    // console.log(res.send(result.message));
    // res.send("Welcome register POST");
});
app.post("/withdraw",authenticateMiddleware, (req, res) => {
    console.log(req.body);
    const result = dataService.withdraw(req, req.body.accno, req.body.pass, req.body.amount);
    console.log(res.status(result.statusCode).json(result));
    // console.log(res.send(result.message));
    // res.send("Welcome register POST");
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

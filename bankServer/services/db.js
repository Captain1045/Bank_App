const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bank_server", { useNewUrlParser: true,useUnifiedTopology: true });
const User = mongoose.model("User", {
    accno: Number,
    name: String,
    bal: Number,
    pass: String
});
module.exports = {
    User
}

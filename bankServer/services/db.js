const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bank_server", { useNewUrlParser: true });
const user = mongoose.model("User", {
    accno: Number,
    name: String,
    bal: Number,
    pass: String
});
module.exports = {
    user
}

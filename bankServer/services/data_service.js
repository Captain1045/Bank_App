const db = require("./db.js")
// accountDetails = {
//     1001: { accno: 1001, name: "Amal", bal: 3000, pass: "user1" },
//     1002: { accno: 1002, name: "Arun", bal: 5000, pass: "user2" },
//     1003: { accno: 1003, name: "Ajay", bal: 7000, pass: "user3" },
//     1004: { accno: 1004, name: "Hari", bal: 6000, pass: "user4" },
// }

const registerData = (accno, name, bal, pass) => {
    return db.User.findOne({ accno }).then(userone => {

        if (userone) {
            return {
                status: false,
                statusCode: 422,
                message: "User Exists! Please Login "
            }
        }
        else {
            const newUser = new db.User({
                accno,
                name,
                bal,
                pass
            });
            newUser.save();
            return {
                status: true,
                statusCode: 200,
                message: "Registration Successful!"
            }

        }
    });

}
const login = (req, acc_no, password) => {
    var accno = parseInt(acc_no);
    //console.log(accno);
    return db.User.findOne({ accno}).then(user => {
        if (user) {
            if (password == user.pass) {
                req.session.currentUser = user;
                //console.log(user.name);
                return {
                    status: true,
                    statusCode: 200,
                    message: "Authentication Successful",
                    name: user.name,
                    accno: user.accno
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 422,
                    message: "Incorrect Password!"
                }
            }
        }
        else {
            return {
                status: false,
                statusCode: 422,
                message: "Invalid Account Number!"
            }

        }

    });
}
const deposit = (req, accno, password, bal) => {
    var amt = parseInt(bal);
    return db.User.findOne({ accno, pass: password }).then(data => {
        //console.log(parseInt(accno));
        //console.log(req.session.currentUser.accno);
        if (req.session.currentUser.accno != parseInt(accno)) {
            return {
                status: false,
                statusCode: 422,
                message: "Unauthorized Opertion! "
            }

        }
        else if (!data) {
            return {
                status: false,
                statusCode: 422,
                message: "No User exist! Please try again"
            }
        }
        else {
            if ((data.pass == password)) {
                //console.log(typeof(data.bal));
                //console.log(data.bal);
                //console.log(amt);
                data.bal += amt;
                data.save();
                return {
                    status: true,
                    statusCode: 200,
                    message: "Available Balance = " + data.bal
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 422,
                    message: "Incorrect data! Please try again"
                }
            }
        }
    });
}
const withdraw = (req, accno, password, amount) => {
    var amt = parseInt(amount);
    return db.User.findOne({ accno, pass: password }).then(data => {

        if (req.session.currentUser.accno != parseInt(accno)) {
            return {
                status: false,
                statusCode: 422,
                message: "Unauthorized Operation! "
            }

        }
        else if (data) {
            if ((data.pass == password)) {
                if (data.bal < amt) {

                    return {
                        status: false,
                        statusCode: 422,
                        message: "Insufficient Balance   Available Balance = " + data.bal
                    }
                }
                else {
                    data.bal -= amt;
                    data.save();
                    return {
                        status: true,
                        statusCode: 200,
                        message: "Available Balance = " + data.bal
                    }
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 422,
                    message: "Incorrect data! Please try again"
                }
            }
        }
        else {
            return {
                status: false,
                statusCode: 422,
                message: "No User exist! Please try again"
            }

        }
    });
}
module.exports = {
    registerData,
    login,
    deposit,
    withdraw
}
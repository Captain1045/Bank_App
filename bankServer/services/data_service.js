const db=require("./db.js")
accountDetails = {
    1001: { accno: 1001, name: "Amal", bal: 3000, pass: "user1" },
    1002: { accno: 1002, name: "Arun", bal: 5000, pass: "user2" },
    1003: { accno: 1003, name: "Ajay", bal: 7000, pass: "user3" },
    1004: { accno: 1004, name: "Hari", bal: 6000, pass: "user4" },
}

const registerData = (accno, name, bal, pass) => {
    if (accno in accountDetails) {
        return {
            status: false,
            statusCode: 422,
            message: "User Exists! Please Login "
        }
        // alert("User Exists! Please Login ");
        // return false;
    }
    else {
        accountDetails[accno] = {
            accno,
            name,
            bal,
            pass
        }
        //this.saveDetails();
        return {
            status: true,
            statusCode: 200,
            message: "Registration Successful!"
        }
        // alert(`Registration Successful!\n`)
        // console.log(accountDetails);
    }
    //return true;
}
const login = (req, acc, pwd) => {
    if (acc in accountDetails) {
        //console.log(data[user_acc]["pass"]);
        //alert(this.user_acc);
        if (pwd == accountDetails[acc]["pass"]) {
            req.session.currentUser = accountDetails[acc].name;
            // this.saveDetails();
            // alert("Authentication Successful");
            // //window.location.href = "dashboard";
            // this.router.navigateByUrl("dashboard");
            return {
                status: true,
                statusCode: 200,
                //currentUser: req.session.currentUser,
                message: "Authentication Successful"
            }
        }
        else {
            //alert("Incorrect Password!");
            return {
                status: false,
                statusCode: 422,
                message: "Incorrect Password!"
            }
        }

    }
    else {
        //alert("Invalid Account Number!");
        return {
            status: false,
            statusCode: 422,
            message: "Invalid Account Number!"
        }
    }
}
const deposit = (req, acc_no, password, amount) => {
    if (req.session.currentUser != accountDetails[acc_no].name) {
        return {
            status: false,
            statusCode: 422,
            message: "Please Log in!"
        }
    }
    else {
        let data = accountDetails;
        if (acc_no in data) {
            // alert(data[acc_no].pass);
            // alert(password);
            if ((data[acc_no].pass == password)) {//&&(data[acc_no].name==this.currentUser)) {
                data[acc_no].bal += amount;
                return {
                    status: true,
                    statusCode: 200,
                    message: "Available Balance = " + data[acc_no].bal
                }
                //alert("Available Balance = " + data[acc_no].bal);
            }
            else {
                return {
                    status: false,
                    statusCode: 422,
                    message: "Incorrect data! Please try again"
                }
                //alert("Incorrect data! Please try again");
            }
        }

        else {
            return {
                status: false,
                statusCode: 422,
                message: "No User exist! Please try again"
            }
            //alert("No User exist! Please try again");
        }
    }
}
const withdraw = (req, acc_no, password, amount) => {
    if (req.session.currentUser != accountDetails[acc_no].name) {
        return {
            status: false,
            statusCode: 422,
            message: "Please Log in!"
        }
    }
    else {
        let data = accountDetails;
        if (acc_no in data) {
            if ((data[acc_no].pass == password)) {//&&(data[acc_no].name==this.currentUser)) {
                if (data[acc_no].bal < amount) {

                    return {
                        status: false,
                        statusCode: 422,
                        message: "Insufficient Balance   Available Balance = " + data[acc_no].bal
                    }
                    // alert("Insufficient Balance\nAvailable Balance = " + data[acc_no].bal);
                }
                else {
                    data[acc_no].bal -= amount;
                    return {
                        status: true,
                        statusCode: 200,
                        message: "Available Balance = " + data[acc_no].bal
                    }
                    //alert("Available Balance = " + data[acc_no].bal);
                }

            }
            else {
                return {
                    status: false,
                    statusCode: 422,
                    message: "Incorrect data! Please try again"
                }
                //alert("Incorrect data! Please try again");
            }

        }
        else {
            return {
                status: false,
                statusCode: 422,
                message: "No User exist! Please try again"
            }
            //alert("No User exist! Please try again");
        }
    }
}
module.exports = {
    registerData,
    login,
    deposit,
    withdraw
}
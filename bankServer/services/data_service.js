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
            message: "Registration Successful!"
        }
        // alert(`Registration Successful!\n`)
        // console.log(accountDetails);
    }
    //return true;
}
const login = (acc, pwd) => {
    if (acc in accountDetails) {
        //console.log(data[user_acc]["pass"]);
        //alert(this.user_acc);
        if (pwd == accountDetails[acc]["pass"]) {
            //this.currentUser=accountDetails[acc].name;
            // this.saveDetails();
            // alert("Authentication Successful");
            // //window.location.href = "dashboard";
            // this.router.navigateByUrl("dashboard");
            return {
                status: true,
                message: "Authentication Successful"
            }
        }
        else {
            //alert("Incorrect Password!");
            return {
                status: false,
                message: "Incorrect Password!"
            }
        }

    }
    else {
        //alert("Invalid Account Number!");
        return {
            status: false,
            message: "Invalid Account Number!"
        }
    }
}
module.exports = {
    registerData,
    login
}
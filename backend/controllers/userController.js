// models/userModel.js
class User {
  constructor(
    fullName,
    companyName,
    email,
    mobileNo,
    preferredMethodOfCommunication
  ) {
    this.fullName = fullName;
    this.companyName = companyName;
    this.email = email;
    this.mobileNo = mobileNo;
    this.preferredMethodOfCommunication = preferredMethodOfCommunication;
  }
}

module.exports = User;

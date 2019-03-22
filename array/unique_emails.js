var numUniqueEmails = function (emails) {
    var set = new Set();
    for (var email of emails) {
        var emailArr = email.split("@");
        var domain = emailArr[0].split(".").join("");
        if (domain.includes("+")) {
            domain = domain.split("+")[0];
        }
        set.add(domain+emailArr[1]);
    }
    console.log(set);
    return set.size;
};
var emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails));
console.log(email[0].toLowerCase());;
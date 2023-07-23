isLoggedIn = true;
isEmailVerified = true;
cardInfo = false;

// if(isLoggedIn) {
//     console.log("LoggedIn Success");
//     if(isEmailVerified) {
//         console.log("Email is verified");
//         if(cardInfo) {
//             console.log("You can make a purchase");
//         }
//     }

// }


if(isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make a purchase");
}
else {
    console.log("You are not allowed to do that");
}
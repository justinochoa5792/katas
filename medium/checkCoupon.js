// The Coupon Code
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  ) {
    return true;
  } else {
    return false;
  }
}

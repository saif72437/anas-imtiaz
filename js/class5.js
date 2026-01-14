// logical operators
// comparison operator  (operator) comparioson operator
// Boolean             operator     Boolean

let a = 12;
let b = 13;
let c = 100;

// AND operator
    // it will return true when both sides are true
    // true && true = true
    // true && false = false
    // false && true = false
    // false && false = false

console.log((a == b) && (c > a)); // false && true = false


// OR operator
    // it will return false when both sides are false
    // true || true = true
    // true || false = true
    // false ||  true = true
    // false ||  false = false

    console.log((a == b) || (c > a)); // false || true = true

// Not operator
    // it will inverser the thing
    console.log(!(a == b)); // true
    console.log(!(c > b)); // false
    
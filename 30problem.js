
// converting kilometers into miles by javascript
const kilometers = prompt("Enter value in kilometers: ")

const factor = 0.621371

const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

// WAP to find number of trailing zeros in a factorial of a number

const factorial = (num) => {
    let ans = 0;
    for (let i = 5; i <= num; i *= 5) {
        ans += num / i;
    }
    return ans;
}

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));
console.log(factorial(20));


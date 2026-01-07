/**
 * Checks if a given number is prime.
 * @param {number} num - The number to check for primality.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(num) {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) return false;
    // 2 is the only even prime number
    if (num === 2) return true;
    // Eliminate all other even numbers
    if (num % 2 === 0) return false;

    // Check for divisors up to the square root of the number
    const limit = Math.sqrt(num);
    // Iterate through odd numbers starting from 3
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) {
            return false; // Found a divisor, not prime
        }
    }

    return true; // No divisors found, it is prime
}

/**
 * Finds the nth prime number.
 * @param {number} n - The position of the prime number to find (e.g., 1 for the 1st prime, 2 for the 2nd).
 * @returns {number} - The nth prime number.
 */
export function findNthPrime(n) {
    if (n <= 0) {
        throw new Error("There is no zeroth or negative prime number.");
    }

    let count = 0; // Number of primes found so far
    let num = 1;   // The current number being checked

    // Loop until the nth prime is found
    while (count < n) {
        num++; // Move to the next number
        if (isPrime(num)) {
            count++; // Increment count if the number is prime
        }
    }

    return num; // Return the number once the count reaches n
}

// Example Usage:
// console.log(`The 10th prime number is: ${findNthPrime(10)}`);

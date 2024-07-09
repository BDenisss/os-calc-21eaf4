/**
 * Calculates the mean (average) of an array of numbers.
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The mean of the numbers
 */

export default function mean(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
/**
 * Calculates the mode of an array of numbers. Returns an array of the most frequent numbers.
 *
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} An array of the most frequent numbers
 */

export default function mode(numbers) {
    const frequency = {};
    numbers.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
    let maxFreq = 0;
    let modes = [];
    for (let num in frequency) {
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            modes = [Number(num)];
        } else if (frequency[num] === maxFreq) {
            modes.push(Number(num));
        }
    }
    return modes.length === numbers.length ? [] : modes;
}
import mean from './mean';

/**
 
 * @param {number[]} numbers 
 * @returns {number} 
 */
export default function variance(numbers) {
    const meanValue = mean(numbers);
    const squaredDifferences = numbers.map(num => Math.pow(num - meanValue, 2));
    return squaredDifferences.reduce((sum, value) => sum + value, 0) / (numbers.length - 1);
}

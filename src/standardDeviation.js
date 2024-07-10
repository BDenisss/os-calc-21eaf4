import variance from './variance';

/**

 * @param {number[]} numbers 
 * @returns {number} 
 */
export default function standardDeviation(numbers) {
    return Math.sqrt(variance(numbers));
}

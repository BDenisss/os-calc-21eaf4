import standardDeviation from '../src/standardDeviation';

test('calculates standard deviation correctly', () => {
    expect(standardDeviation([1, 2, 3, 4, 5])).toBeCloseTo(1.5811, 4); 
});

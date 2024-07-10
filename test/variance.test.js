import variance from '../src/variance';

test('calculates variance correctly', () => {
    expect(variance([1, 2, 3, 4, 5])).toBeCloseTo(2.5); 
});

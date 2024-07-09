import mean from '../src/mean';

test('calculates mean correctly', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
});
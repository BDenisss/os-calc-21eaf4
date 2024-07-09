import median from '../src/median';

test('calculates median correctly', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
    expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
});
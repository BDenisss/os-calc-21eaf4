import mode from '../src/mode';

test('calculates mode correctly', () => {
    expect(mode([1, 2, 2, 3, 4])).toEqual([2]);
    expect(mode([1, 1, 2, 2])).toEqual([1, 2]);
    expect(mode([1, 2, 3, 4])).toEqual([]);
});
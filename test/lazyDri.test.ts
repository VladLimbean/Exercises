import {getSpot, reset} from '../src/lazyDri';

describe('Lazy DRI', () => {
    afterEach(reset);
    it('SHORT > og Felipe', () => {
        const res = getSpot(5, 2);
        
        expect(res).toEqual([1, 3, 0, 4, 2]);
    });

    it('SHORT > alternate', () => {
        const res = getSpot(5, 3);
        expect(res).toEqual([2, 0, 4, 1, 3]);
    });

    it('LONG > final boss', () => {
        const res = getSpot(41, 3);
        
        expect(res).toEqual([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 0, 4, 9, 13, 18, 22, 27, 31, 36, 40, 6, 12, 19, 25, 33, 39, 7, 16, 28, 37, 10, 24, 1, 21, 3, 34, 15, 30]);
    });
});

import { expect } from 'chai';
import { MathService } from '../src/app/services/math';

describe('MathService', () => {
    describe('add()', () => {
        describe('when given no values', () => {
            beforeEach(function () {
                this.instance = new MathService();
                this.result = this.instance.add();
            });

            it('should return zero', function () {
                expect(this.result).to.be.equal(0);
            });
        });

        describe('when given multiple values', () => {
            beforeEach(function () {
                this.instance = new MathService();
                this.result = this.instance.add(1, 2, 3, 4);
            });

            it('should return the sum of them', function () {
                expect(this.result).to.be.equal(10);
            });
        });
    });
});

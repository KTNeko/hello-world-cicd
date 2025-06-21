import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(Calculator.add(2, 3)).toBe(5);
    });

    it('should add negative numbers correctly', () => {
      expect(Calculator.add(-2, -3)).toBe(-5);
    });

    it('should add zero correctly', () => {
      expect(Calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(Calculator.subtract(5, 3)).toBe(2);
    });

    it('should subtract negative numbers correctly', () => {
      expect(Calculator.subtract(-2, -3)).toBe(1);
    });

    it('should subtract zero correctly', () => {
      expect(Calculator.subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(Calculator.multiply(2, 3)).toBe(6);
    });

    it('should multiply negative numbers correctly', () => {
      expect(Calculator.multiply(-2, -3)).toBe(6);
    });

    it('should multiply by zero correctly', () => {
      expect(Calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(Calculator.divide(6, 2)).toBe(3);
    });

    it('should divide negative numbers correctly', () => {
      expect(Calculator.divide(-6, -2)).toBe(3);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => Calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
}); 
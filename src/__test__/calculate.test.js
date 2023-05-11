import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Calculator from '../routes/Calculator';
import calculate from '../components/logic/calculate';

const data = {
  total: null,
  next: null,
  operation: null,
};
describe('Test calculate function', () => {
  it('Checking for add operation', () => {
    render(<Calculator />);
    const one = screen.getByText('1');
    const sum = screen.getByText('+');
    const two = screen.getByText('2');
    const equals = screen.getByText('=');
    const result = screen.getByTestId('result');
    fireEvent.click(one);
    fireEvent.click(sum);
    fireEvent.click(two);
    fireEvent.click(equals);
    expect(result.value).toBe('3');
  });

  it('Checking for subtract operation', () => {
    render(<Calculator />);
    const three = screen.getByText('3');
    const minus = screen.getByText('-');
    const six = screen.getByText('6');
    const equals = screen.getByText('=');
    const result = screen.getByTestId('result');
    fireEvent.click(three);
    fireEvent.click(minus);
    fireEvent.click(six);
    fireEvent.click(equals);
    expect(result.value).toBe('-3');
  });

  test('User pressed 10 and X button (e.g 10 X) but then he press + button the result should be +10', () => {
    const testOperation = { total: '10', next: null, operation: 'x' };
    expect(calculate(testOperation, '+')).toEqual({ total: '10', next: null, operation: '+' });
  });

  test('User pressed 1, + , 9, = then pressed +, result should be +10', () => {
    const testOperation = { total: '10', next: null, operation: '+' };
    expect(calculate(testOperation, '+')).toEqual({ total: '10', next: null, operation: '+' });
  });

  test('When next is 5 and press the . button, it will returns 5.', () => {
    const testOperation = { total: null, next: '5', operation: '.' };
    expect(calculate(testOperation, '.')).toEqual({ total: null, next: '5.', operation: '.' });
  });

  data.next = '1';
  test('Pressing button +/- and next is 1 it will returns -1', () => {
    expect(calculate(data, '+/-')).toEqual({
      total: null,
      next: '-1',
      operation: null,
    });
  });
});

import operate from '../components/logic/operate';

describe('Check for the 4 main operation +, -, / and x', () => {
  test('1 + 2 should be 3', () => {
    expect(operate(1, 2, '+')).toEqual('3');
  });

  test('10 - 1 should be 9', () => {
    expect(operate(10, 1, '-')).toEqual('9');
  });

  test('5 x 5 should be 25', () => {
    expect(operate(5, 5, 'X')).toEqual('25');
  });

  test('49 / 7 should be 7', () => {
    expect(operate(49, 7, '/')).toEqual('7');
  });

  test('20 % 4 should be 0', () => {
    expect(operate(20, 4, '%')).toEqual('0');
  });

  test('10 / 0 should be Can not divide by 0.', () => {
    expect(operate(10, 0, '/')).toEqual("Can't divide by 0.");
  });
});

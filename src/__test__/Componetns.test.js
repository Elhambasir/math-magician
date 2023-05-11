import React from 'react';
import { render } from '@testing-library/react';
import Home from '../routes/Home';
import Quote from '../routes/quote';
import Calculator from '../routes/Calculator';

describe('Component render testing', () => {
  it('Home page renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Quote page renders correctly', () => {
    const { asFragment } = render(<Quote />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Calculator renders correctly', async () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });
});

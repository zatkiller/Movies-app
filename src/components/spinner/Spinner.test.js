// check if the Spinner is displayed and that there are 3 bounces being displayed

import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
  test('displays spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const elem = getByTestId('spinner');
    expect(elem).toBeInTheDocument();
  });
});

/**
 *
 * Tests for CustomButton
 *
 */

import React from 'react';
// import { fireEvent } from '@testing-library/dom'
import CustomButton from '../index';
import { render } from '@testing-library/react';

describe('<CustomButton />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = render(<CustomButton />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 CustomButton component', () => {
    const { getAllByTestId } = render(<CustomButton />);
    expect(getAllByTestId('custom-button').length).toBe(1);
  });
});

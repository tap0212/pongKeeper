/**
 *
 * Tests for CustomInput
 *
 */

import React from 'react';
// import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/react';

import CustomInput from '../index';

describe('<CustomInput />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = render(<CustomInput />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 CustomInput component', () => {
    const { getAllByTestId } = render(<CustomInput />);
    expect(getAllByTestId('custom-input').length).toBe(1);
  });
});

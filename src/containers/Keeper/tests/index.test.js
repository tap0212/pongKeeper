/**
 *
 * Tests for Keeper
 *
 *
 */

import React from 'react';
import { renderProvider } from '../../../utils/testUtils';
import { KeeperTest as Keeper } from '../index';

describe('<Keeper /> container tests', () => {
  beforeEach(() => {});
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(<Keeper />);
    expect(baseElement).toMatchSnapshot();
  });
});

/**
 *
 * CustomButton
 *
 */

import React, { memo } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { colors } from '../../themes/index';

const CB = styled(Button)`
  &.ant-btn {
    ${(props) => props.width && `width: ${props.width}%;`};
    border-radius: 8px;
    height: 2.75rem;
    margin: 0.75rem 0;
    color: ${colors.dark1};
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
  }
  &.ant-btn:hover {
    cursor: pointer;
  }
`;

function CustomButton(props) {
  return <CB data-testid={'custom-button'} {...props} />;
}

CustomButton.propTypes = {};

export default memo(CustomButton);

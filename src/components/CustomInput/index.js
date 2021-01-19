/**
 *
 * CustomInput
 *
 */

import React, { memo } from 'react';
import { Input } from 'antd';
import { colors } from '../../themes/index';
import styled from 'styled-components';

const CI = styled(Input)`
  height: 2.5rem;
  &.ant-input {
    padding-left: 1rem;
    background-color: ${colors.white};
    border: 1px solid ${colors.gray};
    width: 100%;
    margin: 0.75rem 0;
    ${(props) => props.width && `width: ${props.width}%;`};
    border-radius: 8px;
    &.ant-form-item-label {
      font-size: 20px;
    }
    &::placeholder {
      color: ${colors.gray};
    }
  }
`;

function CustomInput(props) {
  return <CI data-testid={'custom-input'} {...props} />;
}

CustomInput.propTypes = {};

export default memo(CustomInput);

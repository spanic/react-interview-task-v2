import React from 'react';
import { Statistic } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

/**
 * DO NOT MODIFY this component
 */

const _Total = ({ className }) => {
  const total = useSelector((state) => state.boltOns.totalPrice);

  return (
    <div className={className}>
      Total:
      <Statistic value={total} suffix="$ per month" />
    </div>
  );
};

const Total = styled(_Total)`
  &, & .ant-statistic-content {
    color: white;
  }
`;

export default Total;

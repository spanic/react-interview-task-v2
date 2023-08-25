import { Statistic } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

/**
 * DO NOT MODIFY this component
 */

const _Total = ({ className }) => {
  const total = useSelector((state) => state.offers.totalPrice);

  return (
    <div className={className}>
      Total:
      <Statistic value={total} suffix="$ per month" />
    </div>
  );
};

const Total = styled(_Total)`
  &,
  & .ant-statistic-content {
    color: white;
  }
`;

export default Total;

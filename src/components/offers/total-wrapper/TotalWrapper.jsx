import React from "react";
import { Total } from "@spanic/react-interview-components";
import { useSelector } from "react-redux";

const TotalWrapper = ({ className }) => {
  const total = useSelector((state) => state.offers.totalPrice);

  return <Total value={total} className={className} />;
};

export default TotalWrapper;

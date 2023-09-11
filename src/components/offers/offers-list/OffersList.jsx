import { Col, Empty, Row, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OfferTypescript as Offer } from "@spanic/react-interview-components";
import { toggleOffersSelection } from "../../../store/offers-slice";
import { fetchOffers } from "../../../thunks/offers.thunks";
import styled from "styled-components";

export default function OffersList() {
  const dispatch = useDispatch();

  const { offers, loading } = useSelector((state) => state.offers);

  const OfferComponent = (offer) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
      <Offer data={offer} />
    </Col>
  );

  if (loading) {
    return (
      <SpinContainer>
        <Spin />
      </SpinContainer>
    );
  }

  return offers.length ? (
    <Row gutter={[16, 16]}>{/* TODO: display the Offers here */}</Row>
  ) : (
    <Empty />
  );
}

const SpinContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

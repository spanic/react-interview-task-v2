import { Col, Empty, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Offer from "../offer/Offer.jsx";

export default function OffersList() {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.offers);

  const OfferComponent = (offer) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
      <Offer data={offer} />
    </Col>
  );

  return offers.length ? (
    <Row gutter={[16, 16]}>{/* list the offers here */}</Row>
  ) : (
    <Empty />
  );
}

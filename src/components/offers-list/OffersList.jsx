import { Col, Empty, Row } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Offer } from "@spanic/react-interview-components";
import { storeOffers, toggleOffersSelection } from "../../store/offers-slice";

export default function OffersList() {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.offers);

  const OfferComponent = (offer) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
      <Offer data={offer} />
    </Col>
  );

  return offers.length ? (
    <Row gutter={[16, 16]}>{/* list the Offers here */}</Row>
  ) : (
    <Empty />
  );
}

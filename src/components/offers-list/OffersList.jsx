import { Col, Empty, Row } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Offer } from "@spanic/react-interview-components";
import { storeOffers, toggleOffersSelection } from "../../store/offers-slice";

export default function OffersList() {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.offers);
  const selectedMap = useSelector((state) => state.offers.selectedMap);

  useEffect(() => {
    async function fetchOffers() {
      const offers = await fetch("http://localhost:3001/offers").then(
        (response) => response.json()
      );
      dispatch(storeOffers(offers));
    }
    fetchOffers();
  }, []);

  const onSelect = useCallback((id) => {
    dispatch(toggleOffersSelection({ id, selected: true }));
  }, []);

  const onRemove = useCallback((id) => {
    dispatch(toggleOffersSelection({ id, selected: false }));
  }, []);

  const OfferComponent = (offer) => (
    <Col
      key={offer.id}
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      lg={{ span: 6 }}
    >
      <Offer
        data={offer}
        selected={selectedMap[offer.id]}
        onSelect={onSelect}
        onRemove={onRemove}
      />
    </Col>
  );

  return offers.length ? (
    <Row gutter={[16, 16]}>{offers.map(OfferComponent)}</Row>
  ) : (
    <Empty />
  );
}

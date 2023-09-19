import React, { useState, useEffect } from "react";
import { Col, Empty, Row, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { OfferTypescript as Offer } from "@spanic/react-interview-components";
import { toggleOffersSelection } from "../../../store/offers-slice";
import { fetchOffers } from "../../../thunks/offers.thunks";
import styled from "styled-components";

const OfferComponent = ({ offer }) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);

  const onSelect = (id) => {
    dispatch(toggleOffersSelection({ id, selected: true }));

    setSelected(true);
  };

  const onRemove = (id) => {
    dispatch(toggleOffersSelection({ id, selected: false }));

    setSelected(false);
  };

  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
      <Offer
        data={offer}
        selected={selected}
        onSelect={onSelect}
        onRemove={onRemove}
      />
    </Col>
  );
};

export default function OffersList() {
  const dispatch = useDispatch();

  const { offers, loading } = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  if (loading) {
    return (
      <SpinContainer>
        <Spin />
      </SpinContainer>
    );
  }

  return offers.length ? (
    <Row gutter={[16, 16]}>
      {offers.map((i) => (
        <OfferComponent key={i.id} offer={i} />
      ))}
    </Row>
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

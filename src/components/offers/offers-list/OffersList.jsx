import React, { useMemo, useCallback } from "react";
import { Col, Empty, Row, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Offer } from "@spanic/react-interview-components";
import { changeSelectedQty } from "../../../store/offers-slice";
import { fetchOffers } from "../../../thunks/offers.thunks";
import styled from "styled-components";

export default function OffersList() {
  const dispatch = useDispatch();

  const { offers, loading, offerMap } = useSelector((state) => state.offers);

  const onChangeQty = (id, selected, price) => {
    dispatch(changeSelectedQty({ id, selected, price }));
  };

  const OfferWrapper = useCallback(
    (offer) => (
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        lg={{ span: 6 }}
      >
        <Offer
          data={offer}
          multiple
          selectedQty={offerMap[offer.id]?.selected || 0}
          onChangeQty={(selected) =>
            onChangeQty(offer.id, selected, offer.price)
          }
        />
      </Col>
    ),
    [offerMap]
  );

  const renderOffers = useMemo(() => {
    if (offers.length) {
      return offers.map((offer) => OfferWrapper(offer));
    }
  }, [offers, OfferWrapper]);

  if (loading) {
    return (
      <SpinContainer>
        <Spin />
      </SpinContainer>
    );
  }

  return offers.length ? (
    <Row gutter={[16, 16]}>{renderOffers}</Row>
  ) : (
    <Empty />
  );
}

const SpinContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

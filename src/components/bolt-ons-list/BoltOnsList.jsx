import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Empty } from 'antd';
import BoltOn from '../bolt-on/BoltOn.jsx';
import {
  storeBoltOns,
  toggleBoltOnSelection,
} from '../../store/bolt-ons-slice.js';

import BOLT_ONS from '../../data/bolt-ons.js';

export default function BoltOnsList() {
  const dispatch = useDispatch();
  const boltOns = useSelector((state) => state.boltOns.boltOns);

  /**
   * 1. Use ___ dispatch(storeBoltOns(BOLT_ONS)); ___ to save bolt-ons to Redux store.
   *
   * 2. Display each bolt-on using the component below.
   *
   * 3. Use ___ dispatch(toggleBoltOnSelection({ id, selected })); ___ to update bolt-ons
   *    selected state and calculate the total monthly price.
   */

  const BoltOnComponent = (boltOn) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
      <BoltOn data={boltOn} />
    </Col>
  );

  return boltOns.length ? (
    <Row gutter={[16, 16]}>{/* list the bolt-ons here */}</Row>
  ) : (
    <Empty />
  );
}

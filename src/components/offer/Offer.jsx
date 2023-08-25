import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import React, { memo } from "react";
import styled from "styled-components";

/**
 * DO NOT MODIFY this component
 */

const { Paragraph, Text } = Typography;

const Offer = memo(
  ({
    data: { id, title, description, price, selected } = {},
    onSelect,
    onRemove,
  }) => {
    return (
      <Card title={title} extra={<Price>{`${price}$ / month`}</Price>}>
        <Paragraph>{description}</Paragraph>
        {selected ? (
          <Button
            shape="round"
            icon={<MinusOutlined />}
            onClick={() => onRemove?.(id)}
            danger
          >
            Remove
          </Button>
        ) : (
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            onClick={() => onSelect?.(id)}
          >
            Add
          </Button>
        )}
      </Card>
    );
  },
  (prevProps, newProps) => prevProps.data?.selected === newProps.data?.selected
);

const Price = styled(Text)`
  margin-left: 16px;
`;

export default Offer;
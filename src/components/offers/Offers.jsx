import { Layout } from "antd";
import { styled } from "styled-components";
import OffersList from "./offers-list/OffersList.jsx";
import TotalWrapper from "./total-wrapper/TotalWrapper.jsx";

const { Content } = Layout;

function Offers() {
  return (
    <>
      <ContentWrapper>
        <OffersList />
      </ContentWrapper>
      <StickyTotalFooter />
    </>
  );
}

const ContentWrapper = styled(Content)`
  padding: 16px;
  min-height: calc(100vh - 86px - 16px);
`;

const StickyTotalFooter = styled(TotalWrapper)`
  &.ant-layout-footer {
    position: sticky;
    bottom: 0;
  }
`;

export default Offers;

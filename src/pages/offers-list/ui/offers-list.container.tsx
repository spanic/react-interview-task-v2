import { Header, Offer, Total, Empty } from '@spanic/react-interview-components'
import { Col, Layout, Row, Spin } from 'antd'
import {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useSelector } from 'react-redux'
import {
  selectOffers,
  selectSelectedOffers,
  selectTotalPrice,
} from '../model/offers-list.selectors'
import { changeOfferQty as changeOfferQtyAction } from '../model/offers-list.slice'
import { fetchOffers } from '../model/offers-list.thunks'
import './offers-list.container.css'
import { useAppDispatch } from '@shared/lib/store/redux-store.hooks.ts'
import debounce from '@shared/lib/utils/debounce.ts'
import LoadingState from '@shared/model/loading-state.model.ts'

const { Content } = Layout

const OffersList: FC = () => {
  const dispatch = useAppDispatch()

  const offers = useSelector(selectOffers)
  const selectedOffers = useSelector(selectSelectedOffers)
  const totalPrice = useSelector(selectTotalPrice)

  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.NOT_STARTED,
  )
  const [searchString, setSearchString] = useState<string>()

  useEffect(() => {
    setLoadingState(LoadingState.IN_PROGRESS)
    dispatch(fetchOffers())
      .unwrap()
      .finally(() => setLoadingState(LoadingState.COMPLETED)) // TODO: implement proper error handling
  }, [dispatch])

  const filteredOffers = useMemo(() => {
    if (!searchString) {
      return offers
    }

    return offers?.filter((offer) =>
      [offer.name, offer.description].some((item) =>
        item.toLowerCase().includes(searchString.toLowerCase()),
      ),
    )
  }, [searchString, offers])

  const changeOfferQty = (id: string, newQty: number): void => {
    dispatch(changeOfferQtyAction({ id, newQty }))
  }

  const handleOnSearch = useCallback(
    debounce((value: string) => {
      setSearchString(value)
    }, 300),
    [],
  )

  const Wrapper: FC<PropsWithChildren> = memo(({ children }) => (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
      {children}
    </Col>
  ))

  return (
    <Layout className="offers-list__layout">
      <Header className="offers-list__header" onChange={handleOnSearch} />
      <Content className="offers-list__content">
        {loadingState !== LoadingState.IN_PROGRESS &&
          !filteredOffers?.length && (
            <div className="offers-list__flex-container">
              <Empty />
            </div>
          )}
        {loadingState === LoadingState.IN_PROGRESS && (
          <div className="offers-list__flex-container">
            <Spin />
          </div>
        )}
        {!!filteredOffers?.length && (
          <Row gutter={[16, 16]}>
            {filteredOffers.map((offer) => (
              <Wrapper key={offer.id}>
                <Offer
                  data={{ ...offer, title: offer.name }}
                  selectedQty={selectedOffers?.[offer.id] ?? 0}
                  onChangeQty={(newQty) => changeOfferQty(offer.id, newQty)}
                />
              </Wrapper>
            ))}
          </Row>
        )}
      </Content>
      <Total className="offers-list__total" value={totalPrice} />
    </Layout>
  )
}

export default memo(OffersList)

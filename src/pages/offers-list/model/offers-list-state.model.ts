import Offer from '@entities/offer/model/offer.model.ts'

export interface OffersListState {
  offers?: Offer[]
  selectedOffers?: { [id: Offer['id']]: number }
}

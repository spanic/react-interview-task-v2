# eCommerce

## Description

It's a simple client-server React ⚛️ + Express.js application used to display some Offers that user can add to their order. When user adds / removes Offers, total price on the bottom panel should be changed accordingly 💸

## Required skills

- using Promises, `async/await`, making asynchronous HTTP requests & handling responses
- using React: hooks (`useEffect`, `useMemo`), passing props to components
- using `redux-thunk`: handling `createAsyncThunk` state changes
- using Redux ([Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start)): dispatching actions, implementing reducers
- handling User events

## Steps to do

1. Get Offers data from the remote API server: send `GET` request to `http://localhost:3001/offers`
2. Save the received data to Redux store

   > Redux store has been already added and configured for the project, just implement the async thunk response state changes `src/store/offers.slice.js`

3. Display the data you saved inside the `OffersList` component. Use the `OfferComponent` declared there

   > 🚧 Checkpoint: make sure that there's a loader displayed when waiting for HTTP request to complete, and all the Offers cards are visible and each contain Offer data: title, description and price

4. Add `onSelect` and `onRemove` handler functions for each `Offer` component. These functions should dispatch `toggleOfferSelection` action and provide chosen Offer `id` and `selected` boolean value as a payload, like `{id, selected: true/false}`

5. Implement the `toggleOfferSelection` reducer from `src/store/offers.slice.js`: it should save selected flag for the chosen Offer in Redux store and add / subtract its price from the order's total sum.

## Final result

<img width="800" src="https://github.com/spanic/react-interview-task-v2/assets/15694775/696e7f74-c559-4605-b5d0-5006f46856b8" alt="React interview task v.2 Offers final result example" />

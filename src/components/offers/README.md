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

   > Redux store has been already added and configured for the project, just implement the async thunk response state changes in `src/store/offers.slice.js`

3. Display the data you saved inside the `OffersList` component. Use the `OfferWrapper` declared there

   > 🚧 Checkpoint: make sure that there's a loader displayed when waiting for HTTP request to complete, and all the Offers cards are visible and each contains Offer data: title, description and price

4. Add `onChangeQty` handler function for each `Offer` component. This function should dispatch `changeSelectedQty` action and provide chosen Offer `id` and selection state as a payload: `{id, selected: true / false}`

5. Implement `changeSelectedQty` reducer from `src/store/offers.slice.js`: it should save selected state for the chosen Offer into the Redux store and add / subtract its price from the total sum

6. 🔥 **Extra task**

   Set `multiple` prop for the `Offer` component to allow selecting multiple instances of the same Offer. Change your implementation if needed to support this new behavior.

   > 🤓 Change `changeSelectedQty` action payload to contain updated Offer selection quantity instead of `selected` boolean value, modify the reducer accordingly

## Final result

| Default                                                                                                                                            | With multiple selection enabled                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Screen Recording 2023-09-20 at 01 55 00](https://github.com/spanic/react-interview-task-v2/assets/15694775/0abb90a0-d1e6-4808-ae21-557f7d135967) | ![Screen Recording 2023-09-20 at 01 18 07](https://github.com/spanic/react-interview-task-v2/assets/15694775/e8e69b2c-ce81-4b22-b98b-baa181a09a84) |

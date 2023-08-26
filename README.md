# React interview task v.2

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/spanic/react-interview-task-v2?title=React%20interview%20task%20v.2)

## Description

It's a simple client-server React ⚛️ + Express.js application used to display some Offers that user can add to their order. When user adds / removes Offers, total price on the bottom panel should be changed accordingly 💸

## Required skills

- using Promises, `async/await`, making asynchronous HTTP requests & handling responses
- using basic React hooks: `useEffect`, `useMemo`
- using Redux ([Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start)): dispatching actions, implementing reducers
- handling User events

## Steps to do

1. Get Offers data from the remote API server: send `GET` request to `http://localhost:3001/offers`
2. Save the received data to Redux store

   > Redux store has been already added and configured for the project, just dispatch the proper action declared in `src/store/offers.slice.js`

3. Display the data you saved inside the `OffersList` component. Use the `OfferComponent` declared there

   > 🚧 Checkpoint: make sure that all the Offers cards are visible and each contain Offer data: title, description and price

4. Add `onSelect` and `onRemove` handler functions for each `Offer` component. These functions should dispatch `toggleOfferSelection` action and provide chosen Offer `id` and `selected` boolean value as an arguments

5. Implement the `toggleOfferSelection` reducer from `src/store/offers.slice.js`: it should add `selected =  true/false` to the chosen Offer in Redux store and add / subtract its price from the order's total sum.

## Final result

<img width="800" src="https://github.com/spanic/react-interview-task-v2/assets/15694775/30177711-510f-401e-b272-01cb7742548b" alt="React interview task v.2 final result example" />

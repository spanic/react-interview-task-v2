import { Provider } from 'react-redux'
import OffersListComponent from '@pages/offers-list/ui/offers-list.container.tsx'
import store from '../model/redux-store'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <OffersListComponent />
    </Provider>
  </StrictMode>,
)

declare type RootState = ReturnType<
  typeof import('./redux-store').default.getState
>
declare type AppDispatch = typeof import('./redux-store').default.dispatch

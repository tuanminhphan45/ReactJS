import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './count/count.slice'
import userReducer from './user/user.slide'
import appReducer from './app/app.slide'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

// ...
// không muốn nó lưu dữ liệu nhiều thì add whitelist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['app']
}
const rootReducer = combineReducers({
  counter: counterReducer,
    user: userReducer,
    app: appReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)




// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
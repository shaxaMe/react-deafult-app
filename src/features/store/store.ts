// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';
import authReducer from '@/features/auth/authSlice';
import type { IAuthState } from '@/utils/types/auth';

import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  createTransform,
  PersistConfig
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authTransform = createTransform<IAuthState, Partial<IAuthState>>(
  (inboundState) => {
    const { ...rest } = inboundState;
    return rest;
  },
  (outboundState) => ({
    isAuthenticated: outboundState.isAuthenticated ?? false,
    user: outboundState.user ?? null,
    token: outboundState.token ?? null,
  }),
  { whitelist: ['auth'] }
);

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});


const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  transforms: [authTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

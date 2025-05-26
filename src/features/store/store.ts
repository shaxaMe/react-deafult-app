// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';
import authReducer from '@/features/auth/authSlice';

import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
const rootReducer = combineReducers({
  counter: counterReducer, 
  auth: authReducer,       
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'], 
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

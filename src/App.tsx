import { RouterProvider } from "react-router";
import QueryProvider from "./config/providers/query.provider.tsx";
import ReduxProvider from "./config/providers/redux.provider.tsx";
import router from "./router/router.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/features/store/store.ts";
function App() {
  return (
    <QueryProvider>
      <ReduxProvider>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </ReduxProvider>
    </QueryProvider>
  );
}

export default App;

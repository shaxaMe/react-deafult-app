import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./views/home/Home.tsx";
import Dashboard from "./views/dashboard/Dashboard.tsx";
import QueryProvider from "./config/providers/query.provider.tsx";
import ReduxProvider from "./config/providers/redux.provider.tsx";

function App() {
    return (
        <QueryProvider>
            <ReduxProvider>
                <BrowserRouter>
                    <Routes>
                    </Routes>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="dashboard" element={<Dashboard/>}>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ReduxProvider>
        </QueryProvider>
    )
}

export default App

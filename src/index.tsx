import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/scrollToTop";
import "./index.css";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { router } from "./Router/router";
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ScrollToTop />
            <Routes>
                {router.map((route) => (
                    <Route
                        key={route.name}
                        path={route.path}
                        element={<route.element />}
                    />
                ))}
            </Routes>
        </Router>
    </Provider>,
    document.getElementById("root")
);

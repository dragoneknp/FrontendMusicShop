import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/scrollToTop";
import "./index.css";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { router } from "./Router/router";
import AuthLayout from "./Layout/authLayout";
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ScrollToTop />
            <AuthLayout router={router as any} />
        </Router>
    </Provider>,
    document.getElementById("root")
);

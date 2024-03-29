import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import {store} from "./redux/store";
// import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <BrowserRouter basename="https://serhii-bondariev.github.io/goit-react-hw-07-phonebook/"> */}
            <App />
            {/* </BrowserRouter> */}
        </Provider>
    </React.StrictMode>
)
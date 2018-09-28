import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { apiMiddleware } from "redux-api-middleware";

import reducers from "./reducers";

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(apiMiddleware))
);
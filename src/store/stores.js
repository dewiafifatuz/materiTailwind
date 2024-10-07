import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer";
import langReducer from "./reducer/langReducer";
import userReducer from "./reducer/userReducer";
import detailRestoReducer from "./reducer/detailRestoReducer";


const stores = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    user: userReducer,
    detailresto: detailRestoReducer,
  },
});

export default stores;

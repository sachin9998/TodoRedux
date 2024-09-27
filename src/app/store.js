import { configureStore } from "@reduxjs/toolkit";
import todoSlider from "../features/todoSlider";

const store = configureStore({
  reducer: {
    toDo: todoSlider,
  },
});

export default store;

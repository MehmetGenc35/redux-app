import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme-slice";


//oluşturacağımız bütün reducerları burada tanıtıyoruz
//merkezi state i oluşturan yer burası
export default configureStore({
    reducer: {
        theme: themeReducer
    }
})
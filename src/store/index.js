import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme-slice";
import localeReducer from "./slices/locale-slice";

//{localeSlice} from '....' şeklinde bir import yapsak dosyada bu isimde bir default dosya arar
//localeReducer şeklinde import ettiğimiz için bu isimde bir dosya aramıyor o ismi biz vermiş olduk



//oluşturacağımız bütün reducerları burada tanıtıyoruz
//merkezi state i oluşturan yer burası
export default configureStore({
    reducer: {
        theme: themeReducer,
        locale: localeReducer
    }
})
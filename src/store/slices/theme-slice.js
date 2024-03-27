import { createSlice } from "@reduxjs/toolkit";

//hepsi tek bir yere tanımlanıyor
const themeSlice=createSlice({
    name:"theme",
    initialState:{//mutable bir state yani değiştirilebilir."..state yapmaya gerek yok"
        darkMode:false
    },
    reducers:{
        setDarkMode:(state,action)=>{//objenin içerisindeyiz key isim value bir method olmuş oldu
            state.darkMode=action.payload
        }
    }
})

export const {setDarkMode}=themeSlice.actions
export default themeSlice.reducer;

//==>setDarkMode action umuz
//hem actionları hem de reducer ı export ettik
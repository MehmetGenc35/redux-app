import { createSlice } from "@reduxjs/toolkit"
//rdux-toolkit ==> içerisinde 3 tane key olan bir obje
//name,initialState,Reducers keyleridir



const localeSlice=createSlice({
    name:"locale",
    initialState:{
        lang:{ title: "English", code: "en", country:"gb" },//default olarak bir dil seçmiş olduk
        currency:"EUR",
        timezone:"GMT+2"
    },
    reducers:{
        //dili değiştiren func
        setLang:(state,action)=>{
            state.lang=action.payload
        },
        //para birimi değiştiren func
        setCurrency:(state,action)=>{
            state.currency=action.payload
        },
        //zaman dilimi değiştiren func
        setTimezone:(state,action)=>{
            state.timezone=action.payload
        }
    }
})

//actions methodlarını export ediyoruz
export const {setLang,setCurrency,setTimezone}=localeSlice.actions

//reducer ı export ediyoruz
export default localeSlice.reducer
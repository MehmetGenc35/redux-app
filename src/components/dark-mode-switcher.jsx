import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { setDarkMode } from "../store/slices/theme-slice";
import { $t } from "../helpers/locale-helper";
const DarkModeSwitcher = () => {

    //var olan state e ulaşmak için "useSelector" hook u kullanılır
    //state i güncellemek için "useDispatch" hook u kullanılır
    const darkMode= useSelector((state)=>state.theme.darkMode)
    const dispatch=useDispatch();

    useEffect(() => {
        //uygulamanın komple dark mode geçmesinin en kolay yolu budur
        //direk doma müdahale edip data-bs-theme attribute i eklenebilir
        //direk doma müdahale edildiği için dom (re-paint) oldu yani baştan oluşturulmuş oldu
        //bunun icin react-bootstrap kütüphanesi kullanılır
        //bu şekilde yapmasaydık her componenti ayrı ayrı darkmode unu düzenlemek gerekirdi    
        const htmlEL=document.querySelector("html")
        htmlEL.setAttribute("data-bs-theme",darkMode?"dark":"light")
        
    }, [darkMode])

    useEffect(() => {
        //localstorage dan değerini çağırıp ına göre sayfa yenilendiğinde değer korunsun diye burayı yapıyoruz
        //localstorage dan dönen değer string olduğu için setDarkMode u bir condition ile takip etmemiz lazım
        const currentMode=localStorage.getItem("darkMode")
        dispatch(setDarkMode(currentMode==="true")) 
    }, [])
    

    const handleMode = () => {

        //localstorage e seçimi kaydedelim
        localStorage.setItem("darkMode",!darkMode)

        //darkmode u set eden redux methodu
        dispatch(setDarkMode(!darkMode)) 

     }
    



	return (
		<Form.Check // prettier-ignore
			type="switch"
			id="custom-switch"
			label={darkMode ? $t("light-mode") : $t("dark-mode")}
			checked={darkMode}
			onChange={handleMode}
		/>
	);
};
export default DarkModeSwitcher;

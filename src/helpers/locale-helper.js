//bölgesel ayarlarla ilgili kavramları içeren dosya
//dil çevirisi yaparken bütün elemanların key olarak yazıldığı default bir dil objesi oluşturmak
//bu dil objesinin keyleri ile aynı olan diğer dil objelerini oluşturmalıyız 


//dinamik importlar methodda çalışır 
let langFile = (await import("./langs/en.json")).default;

import store from "../store";
import { setLang } from "../store/slices/locale-slice";

export const langs = [
	{ title: "English", code: "en", country: "gb" },
	{ title: "Türkçe", code: "tr", country: "tr" },
	{ title: "Français", code: "fr", country: "fr" },
	{ title: "Español", code: "es", country: "es" },
	{ title: "Português", code: "pt", country: "pt" },
	{ title: "中文", code: "zh", country: "cn" },
	{ title: "Deutsch", code: "de", country: "de" },
];

export const setCurrentLang = async (lang) => {
	langFile = (await import(`./langs/${lang.code}.json`)).default;
	store.dispatch(setLang(lang));

	// useDispatch sadece component ler icinde kullanilabildigi icin buradan state e ulasabilmek adina store import edildi ve store uzerinden state ve dispatch e ulasildi.
};

export const $t = (key) => {
	return langFile[key];
};
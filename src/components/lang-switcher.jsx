import React from "react";
import { Dropdown } from "react-bootstrap";
import { langs, setCurrentLang } from "../helpers/locale-helper";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../store/slices/locale-slice";
const LangSwitcher = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const lang = useSelector((state) => state.locale.lang);
    const dispatch = useDispatch();

    return (
        <Dropdown>
            <Dropdown.Toggle
                id="dropdown-basic"
                variant={darkMode ? "dark" : "light"}
            >
                <span className={`fi fi-${lang.country}`}></span> {lang.title}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {langs.map((item) => (
                    <Dropdown.Item
                        key={item.code}
                        onClick={() => setCurrentLang(item)}
                    >
                        <span className={`fi fi-${item.country}`}></span>{" "}
                        {item.title}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default LangSwitcher;

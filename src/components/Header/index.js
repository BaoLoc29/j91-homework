import { useContext, useState } from 'react';
import './style.css'
import ThemeContext from '../../Context/ThemeContext';
const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isLightMode, setIsLightMode] = useState(theme === "light");
    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsLightMode(!isLightMode);
    };
    return (
        <div className='header__select'>
            <ul className={`nav-menu ${theme}`}>
                <li>Learn</li>
                <li>Reference</li>
                <li>Community</li>
                <li>Blog</li>
                <li onClick={handleThemeChange}>
                    <i className={`fa-solid ${isLightMode ? "fa-moon fa-moon-dark" : "fa-sun"}`}></i>
                </li>
                <li><i class={`fa-solid fa-cat ${theme}`}></i></li>
            </ul>
        </div>
    )
}

export default Header;
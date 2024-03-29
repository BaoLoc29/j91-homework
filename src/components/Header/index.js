import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
import ThemeContext from '../../Context/ThemeContext';
const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isLightMode, setIsLightMode] = useState(theme === "light");
    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsLightMode(!isLightMode);
    };
    const handleNavLinkClass = (params) =>{
        return `link ${params.isActive ? "link-active" : ""}`;
    };
    return (
        <div className='header__select'>
            <ul className={`nav-menu ${theme}`}>
                <li>
                    <NavLink className={handleNavLinkClass} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={handleNavLinkClass} to="/welcome">Welcome</NavLink>
                </li>
                <li>
                    <NavLink className={handleNavLinkClass} to="/profile">Profile</NavLink>
                </li>
                <li onClick={handleThemeChange}>
                    <i className={`fa-solid ${isLightMode ? "fa-moon" : "fa-sun"}`}></i>
                </li>
                <li><i class={`fa-solid fa-cat ${theme}`}></i></li>
            </ul>
        </div>
    )
}

export default Header;
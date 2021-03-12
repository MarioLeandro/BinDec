import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import dark from '../styles/components/HeaderDark.module.css';
import light from '../styles/components/HeaderLight.module.css';


const Header = () => {
    const {changeTheme, theme} = useContext(ThemeContext);

    return(
        <div id="header-container">
            {theme === 'dark' ? (
                <div className={dark.headerContainer}>
                    <p>BINARY TO DECIMAL</p>
                    <label className={dark.switch}>
                        <input type="checkbox" onChange={changeTheme}/>
                        <span className={dark.slider}></span>
                    </label>
                </div>
            ) : (
                <div className={light.headerContainer}>
                    <p>DECIMAL TO BINARY</p>
                    <label className={light.switch}>
                        <input type="checkbox" onChange={changeTheme}/>
                        <span className={light.slider}></span>
                    </label>
                </div>
            ) }
        </div>
    );
}

export default Header;
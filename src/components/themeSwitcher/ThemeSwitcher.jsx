import React, { useContext } from 'react';
import { IoMoon } from 'react-icons/io5';
import { BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../themeContext/ContextProvider';
import styles from './ThemeContext.module.sass';

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button type="button" className={styles.switcher} onClick={toggleTheme}>
            {theme === 'light' ? (
                <BsSun className={styles.sun} />
            ) : (
                <IoMoon className={styles.moon} />
            )}
            <span className={styles.text}>
                {theme === 'light' ? 'Светлая' : 'Темная'} тема
            </span>
        </button>
    );
}

import React from 'react';
import styles from './Button.module.sass';

export default function Button({ type, text, onClick }) {
    return (
        <button
            className={`${styles.btn} ${type === 'reset' ? styles.reset : ''}`}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

import React from 'react';
import styles from './Input.module.sass';

export default function Input({
    type,
    name,
    id,
    placeholder,
    label,
    required,
    min,
    autofocus,
    value,
    onChange,
}) {
    return (
        <div>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input
                className={`${styles.input} ${
                    type === 'date' ? styles.date : ''
                }`}
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                min={min}
                autoFocus={autofocus}
                autoComplete="off"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

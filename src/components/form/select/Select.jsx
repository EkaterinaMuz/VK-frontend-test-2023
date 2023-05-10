import React from 'react';
import Select, { components } from 'react-select';
import styles from './react-select.sass';

export default function MySelect({
    options,
    isMulti,
    placeholder,
    label,
    name,
    icon,
    noOptionsMessage,
    closeMenuOnSelect,
    value,
    onChange,
}) {
    const Control = ({ children, ...props }) => (
        <components.Control {...props}>
            {icon} {children}
        </components.Control>
    );

    return (
        <div>
            <span
                style={{
                    display: 'inline-block',
                    marginBottom: '3px',
                    fontSize: '14px',
                    fontWeight: 'var(--fw)',
                    color: 'var(--colors-label)',
                }}
            >
                {label}
            </span>
            <Select
                className={styles.reactSelect}
                classNamePrefix="reactSelect"
                noOptionsMessage={noOptionsMessage}
                name={name}
                placeholder={placeholder}
                options={options}
                isClearable
                isSearchable={false}
                closeMenuOnSelect={closeMenuOnSelect}
                blurInputOnSelect
                isMulti={isMulti}
                components={{ Control }}
                required
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

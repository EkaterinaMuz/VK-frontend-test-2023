import React from 'react';
import Select, { components } from 'react-select';
import styles from './react-select.sass';

export default function MySelect({
    options,
    isMulti,
    placeholder,
    label,
    name,
    id,
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
            <label
                htmlFor={id}
                style={{
                    display: 'inline-block',
                    marginBottom: '3px',
                    fontSize: '14px',
                    fontWeight: 'var(--fw)',
                    color: 'var(--colors-label)',
                }}
            >
                {label}
            </label>
            <Select
                className={styles.reactSelect}
                classNamePrefix="reactSelect"
                noOptionsMessage={noOptionsMessage}
                name={name}
                id={id}
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

import React from 'react';
import styles from './CommentField.module.sass';

export default function CommentField({
    name,
    id,
    value,
    placeholder,
    onChange,
}) {
    return (
        <div>
            <label className={styles.label} htmlFor={id}>
                Комментарий
            </label>
            <textarea
                className={styles.field}
                placeholder={placeholder}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

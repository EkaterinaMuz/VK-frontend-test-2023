import React from 'react';
import styles from './CommentField.module.sass';

export default function CommentField({ name, value, placeholder, onChange }) {
    return (
        <div>
            <label className={styles.label} htmlFor="comment">
                Комментарий
            </label>
            <textarea
                className={styles.field}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

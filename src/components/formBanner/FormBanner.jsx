import React from 'react';
import styles from './FormBanner.module.sass';

export default function FormBanner() {
    return (
        <div className={styles.banner}>
            <img
                className={styles.bannerLogo}
                src={process.env.PUBLIC_URL + 'VK_logo.svg'}
                alt="Лого ВК"
            />
        </div>
    );
}
